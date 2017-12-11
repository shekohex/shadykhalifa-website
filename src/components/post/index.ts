import Vue from 'vue';
import { Component, Prop } from 'vue-typed';
let Config = require('../../config.json')
let template = require('./post.vue').default;
@Component({
    mixins: [template],
})
export default class Post extends Vue {
    @Prop()
    title: string;
    @Prop()
    date: string;
    @Prop()
    hash: string;
}