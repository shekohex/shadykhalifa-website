import { HTTP } from '../common/http';

export class FeedbackSender {
  constructor() {}
  async send(message: string) {
    if (message === '') return Promise.reject('Where is the Message !');
    try {
      const replay = await HTTP.post('https://dead-simple-feedback.herokuapp.com/feedback/add', {
        message
      });
      if (replay.status === 200) return Promise.resolve(true);
      else return Promise.reject(false);
    } catch (error) {
      console.log(error);
    }
  }
}
