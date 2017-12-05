import Vue from 'vue';
import { Component } from 'vue-typed';
import CommingSoon from '../../components/comming-soon'
let template = require('./blog.vue').default;

@Component({
  mixins: [template],
  components: {
    CommingSoon
  }
})
export default class Blog extends Vue {
}

