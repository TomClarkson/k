import React, {Component} from "react"
import ShootKanaGameWrapper from './shoot-kana-game/ShootKanaGameWrapper';
import './App.css';
import AudioPlayerProvider from './AudioPlayerProvider';

export default class App extends Component {
  render() {
    return (
      <AudioPlayerProvider>
        <ShootKanaGameWrapper />
      </AudioPlayerProvider>
    );
  }
}
