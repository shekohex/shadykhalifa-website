import Vue from 'vue';
import { Component, Watch } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { ABOUT_ME_KEY } from '../../common/constants';
let template = require('./about.vue').default;
@Component({
  mixins: [template, GlobalMixins]
})
export default class About extends Vue {
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
  async created() {
    document.title = 'About Me | Shady Khalifa';
    const aboutMe = await ContentService.contentResolver('about-me.md');
    ContentService.getContentDetail(aboutMe.sha, ABOUT_ME_KEY).then(data => {
      this.about = data;
    });
  }
}
