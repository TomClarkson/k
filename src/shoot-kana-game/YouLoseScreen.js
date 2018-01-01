import React, { Component } from 'react';
import Animated from 'animated/lib/targets/react-dom';
import { connect } from 'react-redux';
import { startLevel } from '../actions';
import LevelPreview from './LevelPreview';

class YouLoseScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.opacityAnimatedValue = new Animated.Value(0);
  };
  componentDidMount() {
    setTimeout(() => {
      Animated.spring(this.opacityAnimatedValue, {
        toValue: 1,
        velocity: 0.3,
        tension: 0.2
      }).start();
    }, 1000);
  }
  tryAgain = () => {
    this.props.startLevel(this.props.currentLevelIndex);
  };
  render() {
    const { gameHeight, gameWidth, levelCharacters, kanaType, currentLevelIndex } = this.props;
    const style = {
      opacity: this.opacityAnimatedValue,
      position: 'absolute', 
      top: 0, 
      left: 0, 
      bottom: 0, 
      right: 0, 
      zIndex: 100 
    };

    const charactersForSelectedLevel = levelCharacters[kanaType][currentLevelIndex];

    return (
      <Animated.div style={style}>
        <LevelPreview 
          title="Try again"
          levelCharacters={charactersForSelectedLevel}
          startLevel={this.tryAgain}
          gameHeight={gameHeight} 
          gameWidth={gameWidth} />
      </Animated.div>
    );
  }
}

export default connect(
  state => ({
    currentLevelIndex: state.kanaShootGame.currentLevelIndex,
    gameHeight: state.kanaShootGame.gameHeight,
    gameWidth: state.kanaShootGame.gameWidth,
    levelCharacters: state.kanaShootGame.levelCharacters,
    kanaType: state.kanaShootGame.kanaType
  }),
  { startLevel }
)(YouLoseScreen);