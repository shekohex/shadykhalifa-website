import Vue from 'vue';
import { Component, Watch } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
let Config = require('../../config.json');
let template = require('./no-connection.vue').default;

@Component({
  mixins: [template, GlobalMixins]
})
export default class NoConnection extends Vue {
  reTrying: string = '#### ReTrying ';
  noConnection: string = '### No Connection!';
  connection = navigator.onLine;
  beforeMount() {
    this.connection = navigator.onLine;
    if (this.connection) this.$router.back();
  }
  @Watch('connection')
  onConnectionChange() {
    if (this.connection) this.$router.back();
  }
  created() {
    document.title = 'Ops !.. No Connection';
    setInterval(() => {
      if (this.reTrying === '#### ReTrying ...') this.reTrying = '#### ReTrying ';
      this.reTrying += '.';
      this.connection = navigator.onLine;
    }, 1500);
  }
}
