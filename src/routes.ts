import VueRouter from 'vue-router';
import * as Logger from 'js-logger';
import About from './layouts/about';
import Blog from './layouts/blog';
import SinglePost from './layouts/single-post';
import Portfolio from './layouts/portfolio';
import NotFound from './layouts/not-found';

export const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/post/:hash',
    name: 'post',
    component: SinglePost
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