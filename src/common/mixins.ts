import Marked from './markdown';
export const GlobalMixins = {
    methods: {
      md : value => {
        return Marked.render(value);
      }
    }
  }