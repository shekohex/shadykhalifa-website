import axios, { AxiosError, AxiosResponse } from 'axios';

import VueRouter from 'vue-router';
import * as Logger from 'js-logger';
import About from './layouts/about';
import Blog from './layouts/blog';
import Portfolio from './layouts/portfolio';
import NotFound from './layouts/not-found';

export const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
];

export const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
});