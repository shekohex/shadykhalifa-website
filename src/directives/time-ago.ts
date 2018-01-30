import Timeago from 'timeago.js';
const timeAgo = Timeago();

export function timeago(time: string) {
  return timeAgo.format(new Date(time));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}
