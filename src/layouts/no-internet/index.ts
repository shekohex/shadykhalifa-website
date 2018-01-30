import Vue from 'vue';
import { Component } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { PAGE_NOT_FOUND_KEY } from '../../common/constants';
import NoConnection from '../../components/no-connection';
let Config = require('../../config.json');
let template = require('./no-internet.vue').default;

@Component({
  components: {
    NoConnection
  },
  mixins: [template, GlobalMixins]
})
export default class NoInternet extends Vue {}
