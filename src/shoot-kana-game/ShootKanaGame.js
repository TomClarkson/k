import React, { Component } from 'react';
import { connect } from 'react-redux';
import Brick from './Brick';
import HitBrick from './HitBrick';
import { 
  startLevel, 
  stopGame, 
  userTyped, 
  brickHitByBullet, 
  hitBrickAnimationFinished, 
  userSelectedCharacter 
} from '../actions';
import { getBottomBrick, getBrickAreaHeight } from '../reducer';
import ShooterSpike from './ShooterSpike';
import UserInput from './UserInput';
import BodyMovin from '../animations/BodyMovin';
import spikeFallingOverAnimationData from './spikeFallingOver.json';
import YouLoseScreen from './YouLoseScreen';
import YouWinConfettiAnimation from './YouWinConfettiAnimation';
import StartNextLevelScreen from './StartNextLevelScreen';

const getSpikeLeft = ({bottomBrick, gameWidth, spikeSize}) => {
  const ballLeftInSpikeWrapper = (spikeSize / 2) + 27;
  if(! bottomBrick) {
    return gameWidth / 2 - ballLeftInSpikeWrapper;
  }

  return bottomBrick.left + (bottomBrick.width / 2) - ballLeftInSpikeWrapper;
};

export class ShootKanaGamePresentation extends Component {
  state = {
    showNextLevelPreview: false
  }; 
  componentWillReceiveProps(nextProps) {
    if(!nextProps.hasCompletedLevel && this.props.hasCompletedLevel) {
      this.setState({
        showNextLevelPreview: false
      });      
    }
  }
  onYouWinAnimationFinished = () => {
    this.setState({
      showNextLevelPreview: true
    });
  }
  handleChange = e => {
    const userText = e.target.value.toLowerCase();
    this.props.userTyped(userText);
  };
  render() {
    const {
      stopGame,
      brickHitByBullet,
      hitBrickAnimationFinished,
      userInputAreaHeight,
      bricks,
      hitBricks,
      gameHeight,
      gameWidth,
      characters,
      userSelectedCharacter,
      spikeSize,
      spikeIsShooting,
      hasLostLevel,
      userTyped,
      userText,
      userAnswerIsIncorrect,
      isTouch,
      hasCompletedLevel
    } = this.props;

    const { showNextLevelPreview } = this.state;

    const bottomBrick = getBottomBrick(bricks);

    const spikeLeft = getSpikeLeft({bottomBrick, gameWidth, spikeSize});

    const brickAreaHeight = getBrickAreaHeight({ spikeSize, gameHeight, userInputAreaHeight });

    return (
      <div style={{position: 'relative'}}>
        {hasLostLevel &&
          <YouLoseScreen />
        }
        {showNextLevelPreview &&
          <StartNextLevelScreen />
        }
        {hasCompletedLevel &&
          <div style={{position: 'absolute', top: 0, left: 0, height: brickAreaHeight - userInputAreaHeight, width: gameWidth, zIndex: 1}}>
            <YouWinConfettiAnimation
              brickAreaHeight={brickAreaHeight}
              spikeSize={spikeSize}
              spikeLeft={spikeLeft}
              onAnimationFinished={this.onYouWinAnimationFinished}
            />
          </div>
        }
        <div style={{position: 'relative', background: '#363636', height: brickAreaHeight, width: gameWidth}}>
          <button style={{position: 'absolute', zIndex: 3, top: 10, left: 10}} onClick={stopGame}>STOP</button>

          {bricks.map(b =>
            <Brick key={b.id} brick={b} />
          )}

          {hitBricks.map(b =>
            <HitBrick
              key={b.id}
              ballStartTop={gameHeight - userInputAreaHeight - 30}
              brickHitByBullet={brickHitByBullet}
              hitBrickAnimationFinished={hitBrickAnimationFinished}
              brick={b} />
          )}
        </div>
        <div style={{height: spikeSize, width: gameWidth, background: '#363636', position: 'relative'}}>
          <div style={{height: spikeSize, width: spikeSize}}>
            {!hasLostLevel && !hasCompletedLevel &&
              <ShooterSpike
                isShooting={spikeIsShooting}
                spikeLeft={spikeLeft} />
            }
            {hasLostLevel &&
              <div style={{transform: `translateX(${spikeLeft}px)`}}>
                <BodyMovin options={{
                  loop: false,
                  autoplay: true,
                  prerender: true,
                  animationData: spikeFallingOverAnimationData
                }} />
              </div>
            }
          </div>
        </div>
        <UserInput
          key={bottomBrick && bottomBrick.id}
          userText={userText}
          userAnswerIsIncorrect={userAnswerIsIncorrect}
          isTouch={isTouch}
          height={userInputAreaHeight}
          width={gameWidth}
          userTyped={userTyped}
          userSelectedCharacter={userSelectedCharacter}
          bottomBrick={bottomBrick}
          characters={characters} />
      </div>
    );
  }
}

export default connect(
  state => state.kanaShootGame,
  { userTyped, brickHitByBullet, hitBrickAnimationFinished, startLevel, stopGame, userSelectedCharacter }
)(ShootKanaGamePresentation);
