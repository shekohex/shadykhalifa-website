import Vue from 'vue';
import { Component } from 'vue-typed';
import * as fm from 'front-matter';
import { GlobalMixins } from '../../common/mixins';
import { PostService } from '../../services/posts';
let template = require('./single-post.vue').default;

@Component({
  mixins: [template, GlobalMixins],
  components: {}
})
export default class SinglePost extends Vue {
  title: string = '';
  date: string = '';
  content: string = '### Loading Post ..';
  postService: PostService = new PostService();

  created() {
    this.loadPost();
  }

  loadPost() {
    this.postService
      .getPostDetail(this.$route.params.hash)
      .then(text => {
        const content = fm(text);
        this.content = content.body;
        this.title = content.attributes['title'];
        this.date = content.attributes['date'];
        // Set window title
        window.document.title = `${this.title} | Shady Khalifa`;
      })
      .catch(err => {
        console.error('[getPostDetail]', err);
        this.$router.replace('/');
      });
  }
}
