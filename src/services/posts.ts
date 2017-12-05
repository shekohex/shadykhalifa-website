import { HTTP } from '../common/http';
import { CacheMaker } from './../common/cache';
let Config = require('../config.json');
export class PostService {
    getPostUrl(hash) {
        return `https://api.github.com/repos/${Config.repo}/git/blobs/${hash}`
    }
    getPosts() {
        return HTTP.get(Config.path)
            .then((res) => res.data)
            .then(data => {
                if (CacheMaker.has('posts_list')) {
                    return Promise.resolve(CacheMaker.getByKey('posts_list'));
                } else {
                    // Data cleaning
                    const list = data.map(({ name, sha, size }) => ({
                        title: this.onlyTitle(name),
                        date: this.onlyDate(name),
                        sha,
                        size
                    }))
                    CacheMaker.cacheData('posts_list', list);
                    return list;
                }
            })
    }
    getPostDetail(hash) {
        const httpOpts = {
            headers: { Accept: 'application/vnd.github.v3.raw' }
        }
        const cacheKey = 'post.' + hash;
        if (CacheMaker.has(cacheKey)) {
            return Promise.resolve(CacheMaker.getByKey(cacheKey))
        } else {
            return HTTP.get(this.getPostUrl(hash), httpOpts)
                .then(res => res.data)
                .then(content => {
                    CacheMaker.cacheData(cacheKey, content);
                    return content
                })
        }
    }
    onlyTitle(title: string) {
        return title.replace(/\.md$/, '')
            .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
    }

    onlyDate(title: string) {
        const res = /^\d{4}-\d{1,2}-\d{1,2}/.exec(title);
        if (res) return res[0];
        else return new Date(Date.now()).toString();
    }
}