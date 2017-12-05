import './polyfill';
import './localisation';
import './style.scss';
import Vue from 'vue';
import { Component } from 'vue-typed';
import VueRouter from 'vue-router';
import * as Logger from 'js-logger';
import { mapGetters, mapActions } from 'vuex';
import * as axios from 'axios'
import * as VueAxios from 'vue-axios'
import { timeago, formatDate } from './directives/time-ago'
let Config = require('./config.json');

import store from './store';

import { router } from './routes';
let template = require('./main.vue').default;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
let logLevel = (Config.debug ? Logger.DEBUG : Logger.ERROR);
Logger.useDefaults();
Logger.setLevel(logLevel);
Vue.filter('timeago', timeago);
Vue.filter('formateDate', formatDate);

Vue.config.errorHandler = function (err, vm, info) {
  Logger.error('Vue error: ', err);
};

@Component({
  mixins: [template],
  store,
  components: {},
  router: router
})
class App extends Vue {
  links = document.links;
  mounted() {
    for (let i = 0, linksLength = this.links.length; i < linksLength; i++) {
      if (this.links[i].hostname != window.location.hostname) {
        this.links[i].target = '_blank';
      }
   }
  }
}

window.onerror = function (errorMsg, url, lineNo, colNo, error) {
  Logger.error('Global event: ', errorMsg);
};

export const app = new App().$mount('#app');
