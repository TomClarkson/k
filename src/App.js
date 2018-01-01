import React, {Component} from "react"
import ShootKanaGameWrapper from './shoot-kana-game/ShootKanaGameWrapper';
import './App.css';
import AudioPlayerProvider from './AudioPlayerProvider';
import gameSounds from './shoot-kana-game/sounds';

export default class App extends Component {
  render() {
    return (
      <AudioPlayerProvider initialAudios={gameSounds}>
        <ShootKanaGameWrapper />
      </AudioPlayerProvider>
    );
  }
}
