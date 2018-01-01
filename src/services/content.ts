import { HTTP } from '../common/http';
import { CacheMaker } from './../common/cache';
let Config = require('../config.json');
export class ContentService {
    private getContentUrl(hash: string) {
        return `https://api.github.com/repos/${Config.repo}/git/blobs/${hash}`
    }
    getContentDetail(hash: string, cacheKey: string) {
        cacheKey += hash
        const httpOpts = {
            headers: { Accept: 'application/vnd.github.v3.raw' }
        }
        if (CacheMaker.has(cacheKey)) {
            return Promise.resolve(CacheMaker.getByKey(cacheKey))
        } else {
            return HTTP.get(this.getContentUrl(hash), httpOpts)
                .then(res => res.data)
                .then(content => {
                    CacheMaker.cacheData(cacheKey, content);
                    return content
                })
        }
    }
}