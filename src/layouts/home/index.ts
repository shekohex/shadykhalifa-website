import Vue from 'vue';
import { Component, Prop } from 'vue-typed';
import * as Logger from 'js-logger';

import './home.scss';
let template = require('./home.vue').default;
let show: boolean = true
@Component({
  mixins: [template],
  components: {}
})
export default class Home extends Vue {

}
