import React, { Component } from 'react';
import SVGStrokeText from '../svg-stroke-text/SVGStrokeText';
import Animated from 'react-dom-animated';
import { connect } from 'react-redux';
import { startLevel } from '../actions';
import LevelPreview from './LevelPreview';

class StartNextLevelScreen extends Component {
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
  startNextLevel = () => {
    this.props.startLevel(this.props.currentLevelIndex + 1);
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

    const charactersForSelectedLevel = levelCharacters[kanaType][currentLevelIndex + 1];

    // if there is no next level they have won it all
    if(!charactersForSelectedLevel) {
      return (
        <Animated.div style={{...style, background: '#363636'}}>
          <SVGStrokeText text={`You have mastered ${kanaType}!`} />
        </Animated.div>
      );
    }

    return (
      <Animated.div style={style}>
        <LevelPreview 
          title="Next Level"
          levelCharacters={charactersForSelectedLevel}
          startLevel={this.startNextLevel}
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
)(StartNextLevelScreen);