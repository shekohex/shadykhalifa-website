import Vue from 'vue';
import { Component, Watch } from 'vue-typed';
import Post from '../../components/post';
import { PostService } from '../../services/posts';
let template = require('./blog.vue').default;

@Component({
  mixins: [template],
  components: {
    Post
  }
})
export default class Blog extends Vue {
  lists: Array<any> = [];
  loading: boolean = true;
  postService: PostService = new PostService();

  mounted() {
    window.document.title = 'Blog | Shady Khalifa';
    this.loadList();
  }
  get filteredList() {
    let keyword = '';
    if (this.$route) {
      keyword = (this.$route.query.q || '').toLowerCase();
    }
    // Filter by title, Order by publish date, desc
    return this.lists
      .filter(item => item.title.toLowerCase().indexOf(keyword) !== -1)
      .sort((itemA, itemB) => (new Date(itemB.date) as any) - (new Date(itemA.date) as any));
  }
  @Watch('$route')
  loadList() {
    this.loading = true;
    this.postService.getPosts().then(
      lists => {
        this.loading = false;
        this.lists = lists;
      },
      err => {
        this.loading = false;
        console.info('[getList]', err);
      }
    );
  }
}
