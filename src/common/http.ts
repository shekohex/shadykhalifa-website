import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
let Config = require('../config.json');
export const HTTP = axios.create({
    baseURL: `https://api.github.com/repos/${Config.repo}/contents/`
});