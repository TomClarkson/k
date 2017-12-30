import { Observable } from 'rxjs';

export default class AudioPlayer {
  constructor() {
    this.audios = {};
  }
  addAudios = (audiosArr) => {
    const isTouch = 'ontouchstart' in window;
    if(! isTouch) {
      audiosArr.forEach(data => {
        const audio = new Audio(data.audio);
        this.audios[data.name] = audio;
      });
      return;
    }
    Observable.fromEvent(document, 'touchstart')
      .take(1)
      .subscribe(() => {
        audiosArr.forEach(data => {
          const audio = new Audio(data.audio);
          // audio.play();
          // audio.pause();
          
          this.audios[data.name] = audio;
        });
      });
  }
  play = (name) => {
    const audio = this.audios[name];
    if(audio) {
      audio.play();
    }
  }
}