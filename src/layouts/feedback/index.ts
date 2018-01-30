import Vue from 'vue';
import { Component, Watch } from 'vue-typed';
import { GlobalMixins } from '../../common/mixins';
import { ContentService } from '../../services/content';
import { FeedbackSender } from '../../services/feedback';
import { FEEDBACK_KEY } from '../../common/constants';
let template = require('./feedback.vue').default;

@Component({
  mixins: [template, GlobalMixins]
})
export default class Feedback extends Vue {
  content: string = '### Loading ...';
  loading: boolean = true;
  failed: boolean = false;
  sendingMsg: boolean = false;
  messageSent: boolean = false;
  message: string = '';
  placeHolder: string = '';
  feedbackSender: FeedbackSender = new FeedbackSender();
  mounted() {
    window.document.title = 'Feedback | Shady Khalifa';
  }
  async created() {
    const feedback = await ContentService.contentResolver('feedback.md');
    ContentService.getContentDetail(feedback.sha, FEEDBACK_KEY).then(data => {
      this.content = data;
      this.loading = false;
    });
    let randomMessages = ['Say Hallo !', 'Hay', 'Have a Message ?'];
    this.placeHolder = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  }

  async sendFeedback() {
    try {
      this.sendingMsg = true;
      const res = await this.feedbackSender.send(this.message);
      if (res) {
        this.message = '';
        this.messageSent = true;
        this.sendingMsg = false;
      } else {
        this.failed = true;
        this.sendingMsg = false;
      }
    } catch (error) {
      this.failed = true;
      this.sendingMsg = false;
      console.log(error);
    }
  }
}
