import Vue from 'vue';
import { Component } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { PAGE_NOT_FOUND_KEY } from '../../common/constants';
let Config = require('../../config.json')
let template = require('./not-found.vue').default;

@Component({
  mixins: [template, GlobalMixins],
})
export default class NotFound extends Vue {
  private readonly contentService: ContentService = new ContentService();
  content: string = '### Loading ...';
  created() {
    document.title = '404 Page Not Found'
    this.contentService.getContentDetail(Config.notfoundhash, PAGE_NOT_FOUND_KEY).then((data) => {
      this.content = data;
    })
  }
}

