import Vue from 'vue';
import { Component, Watch } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { ABOUT_ME_KEY } from '../../common/constants';
let Config = require('../../config.json');
let template = require('./about.vue').default;
@Component({
  mixins: [template, GlobalMixins]
})
export default class About extends Vue {
  private readonly contentService: ContentService = new ContentService();
  about: string = '### Loading ...';
  connection = navigator.onLine;
  @Watch('connection')
  onConnectionChange() {
    if (!this.connection) this.$router.push('no-internet');
  }
  beforeMount() {
    this.connection = navigator.onLine;
    if (!this.connection) this.$router.push('no-internet');
  }
  created() {
    document.title = 'About Me | Shady Khalifa';
    this.contentService.getContentDetail(Config.aboutmehash, ABOUT_ME_KEY).then(data => {
      this.about = data;
    });
  }
}
