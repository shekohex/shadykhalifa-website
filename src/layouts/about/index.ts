import Vue from 'vue';
import { Component } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { PostService } from '../../services/posts';
import { ContentService } from '../../services/content';
let Config = require('../../config.json')
let template = require('./about.vue').default;
@Component({
    mixins: [template, GlobalMixins],
})
export default class About extends Vue {
    private readonly contentService: ContentService = new ContentService();
    private readonly postService: PostService = new PostService();
    about: string = '### Loading ...';
    created() {
        document.title = 'About Me | Shady Khalifa'
       this.contentService.getContentDetail(Config.aboutmehash).then((data) => {
           this.about = data;
       })
    }
}
