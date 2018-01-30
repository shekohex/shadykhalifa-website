import * as Markit from 'markdown-it';
import * as emoji from 'markdown-it-emoji';
import * as twemoji from 'twemoji';
import * as footnote from 'markdown-it-footnote';
import * as prism from 'markdown-it-prism';
const options = {
  html: true,
  linkify: true,
  typographer: true
};
const prismPlugins = ['toolbar', 'line-numbers'];
const Marked = new Markit(options);
Marked.use(emoji);
Marked.use(footnote);
Marked.use(prism, prismPlugins);
Marked.renderer.rules.emoji = (token, idx) => {
  return twemoji.parse(token[idx].content);
};
export default Marked;
