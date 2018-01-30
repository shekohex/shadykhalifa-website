import Vue from 'vue';
import { Component } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { PAGE_NOT_FOUND_KEY } from '../../common/constants';
let template = require('./not-found.vue').default;

@Component({
  mixins: [template, GlobalMixins]
})
export default class NotFound extends Vue {
  content: string = '### Loading ...';
  async created() {
    document.title = '404 Page Not Found';
    const notFound = await ContentService.contentResolver('404.md');
    ContentService.getContentDetail(notFound.sha, PAGE_NOT_FOUND_KEY).then(data => {
      this.content = data;
    });
  }
}
