import Vue from 'vue';
import { Component } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
let Config = require('../../config.json');
let template = require('./comming-soon.vue').default;
@Component({
  mixins: [template, GlobalMixins]
})
export default class CommingSoon extends Vue {
  soon: string = '### Comming Soon.. _I think_ !';
  created() {
    document.title = 'Comming Soon.. I think !';
  }
}
