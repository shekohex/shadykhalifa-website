import * as Marked from 'marked';

Marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: code => {
    return require('highlight.js').highlightAuto(code).value;
  }
});
export const GlobalMixins = {
    methods: {
      md : value => {
        return Marked(value);
      }
    }
  }