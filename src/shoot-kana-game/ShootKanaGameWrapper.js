import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShootKanaGame from './ShootKanaGame';
import SelectHiriganaKatakanaScreen from './SelectHiriganaKatakanaScreen';
import SelectLevelBoxScreen from './SelectLevelBoxScreen';
import YouWinGameScreen from './YouWinGameScreen';
import { startGame, playHiriganaLevels, playKatakanaLevels, startLevel, selectLevel } from '../actions';
import './game.css';
import HomeBackground from './HomeBackground';
import LevelPreview from './LevelPreview';

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
      gameWidth,
      selectLevel,
      isOnLevelPreview
    } = this.props;

    if(isOnLevelPreview) {
      const charactersForSelectedLevel = levelCharacters[kanaType][currentLevelIndex];
      return (
        <LevelPreview 
          title="Start level"
          levelCharacters={charactersForSelectedLevel}
          startLevel={() => startLevel(currentLevelIndex)}
          gameHeight={gameHeight} 
          gameWidth={gameWidth} />
      );
    }

    // if(hasCompletedLevel) {
    //   return (
    //     <YouWinGameScreen
    //       goToNextLevel={() => startLevel(currentLevelIndex + 1)} />
    //   );
    // }

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
            onSelectLevel={selectLevel} />
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

const MAX_GAME_HEIGHT = 700;
const MAX_GAME_WIDTH = 600;

class ShootKanaGameOuterWrapper extends Component {
  constructor(props) {
    super(props);

    const isTouch = 'ontouchstart' in window;

    const gameHeight = Math.min(window.innerHeight, MAX_GAME_HEIGHT);
    const gameWidth = Math.min(window.innerWidth, MAX_GAME_WIDTH);

    this.state = {
      gameHeight,
      gameWidth,
      isTouch
    };
  }
  makeGameData = () => {
    const { isTouch, gameHeight, gameWidth } = this.state;

    const numberOfBricksForLevel = 3;

    if(!isTouch) {
      return {
        gameHeight,
        gameWidth,
        numberOfBricksForLevel,
        brickHeight: 80,
        brickWidth: 80,
        brickVy: 60,
        isTouch,
        spikeSize: 200,
        userInputAreaHeight: 80
      };
    }

    return {
      gameHeight,
      gameWidth,
      numberOfBricksForLevel,
      brickHeight: 40,
      brickWidth: 40,
      brickVy: 30,
      isTouch,
      spikeSize: 150,
      userInputAreaHeight: 70
    };
  }
  componentDidMount() {
    this.props.startGame(
      this.makeGameData()
    );
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
    isOnLevelPreview: state.kanaShootGame.isOnLevelPreview,
    isOnHomeScreen: state.kanaShootGame.isOnHomeScreen,
    isOnLevelSelect: state.kanaShootGame.isOnLevelSelect,
    levelCharacters: state.kanaShootGame.levelCharacters,
    kanaType: state.kanaShootGame.kanaType,
    hasCompletedLevel: state.kanaShootGame.hasCompletedLevel,
    currentLevelIndex: state.kanaShootGame.currentLevelIndex,
  }),
  { startGame, playHiriganaLevels, playKatakanaLevels, startLevel, selectLevel }
)(ShootKanaGameOuterWrapper);
