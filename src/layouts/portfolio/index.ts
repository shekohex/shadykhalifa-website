import Vue from 'vue';
import { Component } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { PORTFOLIO_KEY } from '../../common/constants';
let template = require('./protfolio.vue').default;

@Component({
  mixins: [template, GlobalMixins]
})
export default class Protfolio extends Vue {
  content: string = '### Loading ...';
  async created() {
    document.title = 'Protfolio | Shady Khalifa';
    const protfolio = await ContentService.contentResolver('portfolio.md');
    ContentService.getContentDetail(protfolio.sha, PORTFOLIO_KEY).then(data => {
      this.content = data;
    });
  }
}
