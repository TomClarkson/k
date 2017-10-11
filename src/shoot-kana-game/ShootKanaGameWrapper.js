import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShootKanaGame from './ShootKanaGame';
import SelectHiriganaKatakanaScreen from './SelectHiriganaKatakanaScreen';
import SelectLevelBoxScreen from './SelectLevelBoxScreen';
import YouWinGameScreen from './YouWinGameScreen';
import { startGame, playHiriganaLevels, playKatakanaLevels, startLevel } from '../actions';
import './game.css';
import HomeBackground from './HomeBackground';
// import jenCutBG from '../../common/assets/images/jen-cut-bg.png';
// const japanBGStyles = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'flex-end',
//   overflow: 'hidden'
// };
//
// <div style={japanBGStyles}>
//   <img src={jenCutBG} alt="japan background" />
// </div>
class ShootKanaGameInnerWrapper extends Component {
  render() {
    const {
      playHiriganaLevels,
      playKatakanaLevels,
      isOnHomeScreen,
      isOnLevelSelect,
      levelCharacters,
      kanaType,
      startLevel,
      hasCompletedLevel,
      currentLevelIndex,
      gameHeight,
      gameWidth
    } = this.props;

    if(hasCompletedLevel) {
      return (
        <YouWinGameScreen
          goToNextLevel={() => startLevel(currentLevelIndex + 1)} />
      );
    }

    if(isOnHomeScreen) {
      return (
        <HomeBackground
          title="Select mode"
          width={gameWidth}
          height={gameHeight}>
          <SelectHiriganaKatakanaScreen
            selectHirigana={playHiriganaLevels}
            selectKatakana={playKatakanaLevels} />
        </HomeBackground>
      );
    }

    if(isOnLevelSelect) {
      const boxes = levelCharacters[kanaType]
        .map(level => ({
          title: level[0].character
        }));

      return (
        <HomeBackground
          title="Select level"
          width={gameWidth}
          height={gameHeight}>
          <SelectLevelBoxScreen
            boxes={boxes}
            onSelectLevel={startLevel} />
        </HomeBackground>
      );
    }

    return (
      <ShootKanaGame />
    );
  }
}

const outerWrapperStyles = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center'
};

const borderWrapperStyles = {
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class ShootKanaGameOuterWrapper extends Component {
  constructor(props) {
    super(props);

    const gameHeight = Math.min(window.innerHeight, 600);
    const gameWidth = Math.min(window.innerWidth, 600);
    const isTouch = 'ontouchstart' in window;

    this.state = {
      gameHeight,
      gameWidth,
      isTouch
    };
  }
  componentDidMount() {
    const { isTouch, gameHeight, gameWidth } = this.state;

    this.props.startGame({
      gameHeight,
      gameWidth,
      numberOfBricksForLevel: 3,
      brickHeight: 80,
      brickWidth: 80,
      brickVy: 60,
      isTouch,
      spikeSize: 200,
      userInputAreaHeight: 80
    });
  }
  render() {
    const { gameHeight, gameWidth, isTouch } = this.state;
    const borderPadding = isTouch ? 0 : 20;

    return (
      <div id="kana-shoot-game-outer-wrapper" style={{...outerWrapperStyles, alignItems: isTouch ? 'flex-start' : 'center'}}>
        <div style={{...borderWrapperStyles, height: gameHeight + borderPadding, width: gameWidth + borderPadding}}>
          <div style={{height: gameHeight, position: 'relative', width: gameWidth, display: 'flex'}}>
            <ShootKanaGameInnerWrapper
              {...this.state}
              {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isOnHomeScreen: state.kanaShootGame.isOnHomeScreen,
    isOnLevelSelect: state.kanaShootGame.isOnLevelSelect,
    levelCharacters: state.kanaShootGame.levelCharacters,
    kanaType: state.kanaShootGame.kanaType,
    hasCompletedLevel: state.kanaShootGame.hasCompletedLevel,
    currentLevelIndex: state.kanaShootGame.currentLevelIndex,
  }),
  { startGame, playHiriganaLevels, playKatakanaLevels, startLevel }
)(ShootKanaGameOuterWrapper);
