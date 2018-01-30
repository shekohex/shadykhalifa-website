export class CacheMaker {
  static getByKey(key: string) {
    if (!window.sessionStorage) return false;
    return JSON.parse(window.sessionStorage.getItem(key) || '');
  }

  static cacheData(key: string, data: Array<any> | object | string): boolean {
    if (!window.sessionStorage) return false;
    else {
      window.sessionStorage.setItem(key, JSON.stringify(data));
      return true;
    }
  }

  static has(key: string): boolean {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key));
  }
}
