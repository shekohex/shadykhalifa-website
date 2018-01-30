import { HTTP } from '../common/http';
import { CacheMaker } from './../common/cache';
let Config = require('../config.json');
export class ContentService {
  private static getContentUrl(hash: string) {
    return `https://api.github.com/repos/${Config.repo}/git/blobs/${hash}`;
  }
  static getContentDetail(hash: string, cacheKey: string) {
    cacheKey += hash;
    const httpOpts = {
      headers: { Accept: 'application/vnd.github.v3.raw' }
    };
    if (CacheMaker.has(cacheKey)) {
      return Promise.resolve(CacheMaker.getByKey(cacheKey));
    } else {
      return HTTP.get(ContentService.getContentUrl(hash), httpOpts)
        .then(res => res.data)
        .then(content => {
          CacheMaker.cacheData(cacheKey, content);
          return content;
        });
    }
  }
  static contentResolver(content: string) {
    return HTTP.get('_content')
      .then(res => res.data)
      .then(data => {
        if (CacheMaker.has('content_list')) {
          return Promise.resolve(
            CacheMaker.getByKey('content_list').filter(val => val.name === content)[0]
          );
        } else {
          // Data cleaning
          const list = data.map(({ name, sha, size }) => ({
            name,
            sha,
            size
          }));
          CacheMaker.cacheData('content_list', list);
          return list.filter(val => val.name === content)[0];
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
}
