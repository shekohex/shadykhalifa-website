import Vue from 'vue';
import { Component } from 'vue-typed';
import CommingSoon from '../../components/comming-soon'
let template = require('./protfolio.vue').default;

@Component({
  mixins: [template],
  components: {
    CommingSoon
  }
})
export default class Protfolio extends Vue {
}

