import Vue from 'vue';
import { Component } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { PORTFOLIO_KEY } from '../../common/constants';
let Config = require('../../config.json')
let template = require('./protfolio.vue').default;

@Component({
  mixins: [template, GlobalMixins],
})
export default class Protfolio extends Vue {
  private readonly contentService: ContentService = new ContentService();
  content: string = '### Loading ...';
  created() {
    document.title = 'Protfolio | Shady Khalifa'
    this.contentService.getContentDetail(Config.portfoliohash, PORTFOLIO_KEY).then((data) => {
      this.content = data;
    })
  }
}

