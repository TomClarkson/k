import React, { Component } from "react";
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

export const withAudioPlayer = (Component) => {
  return class AudioPlayerWrapper extends React.Component {
    static contextTypes = {
      audioPlayer: PropTypes.object
    }
    render() {
      return (
        <Component 
          {...this.props} 
          audioPlayer={this.context.audioPlayer} />
      );
    }
  }
}

export default class AudioPlayerProvider extends Component {
  static defaultProps = {
    initialAudios: []
  };
  static propTypes = { 
    initialAudios: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      audio: PropTypes.any.isRequired
    }))
  };
  static childContextTypes = {
    audioPlayer: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.audioPlayer = new AudioPlayer();
    this.audioPlayer.addAudios(props.initialAudios);
  }
  getChildContext() {
    return {audioPlayer: this.audioPlayer};
  }
  render() {
    return this.props.children;
  }
}