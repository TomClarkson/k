import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';
import Bullet from './Bullet';
import SVGStrokeText from '../svg-stroke-text/SVGStrokeText';
import Animated from 'react-dom-animated';
import ShooterSpike from './ShooterSpike';
import BodyMovin from '../animations/BodyMovin';
import happySpikeNoCircle from './HappySpikeNoCircle.json';
import { withAudioPlayer } from '../AudioPlayerProvider';

const fettiFig = {
  angle: 90,
  spread: 70,
  startVelocity: 16,
  elementCount: 180,
  decay: 0.94
};

class YouWinConfettiAnimation extends Component {
  constructor(props, context){
    super(props, context);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      showConfetti: false,
      showHappySpike: false,
      animateInBullet: false
    };
  };
  componentDidMount() {
    this.props.audioPlayer.play('winLevel');
    setTimeout(() => {
      this.setState({
        animateInBullet: true
      });
    }, 200);

    setTimeout(() => {
      this.animateTextIn();
    }, 500);

    setTimeout(() => {
      this.setState({
        showHappySpike: true
      });
    }, 650);
  }
  animateTextIn = () => {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      velocity: 0.7,
      tension: 0.1
    }).start(this.props.onAnimationFinished);
  }
  bulletAnimationFinished = () => {
    this.setState({showConfetti: true});
  }
  render() {
    const { showConfetti, showHappySpike, animateInBullet } = this.state;
    const { 
      spikeLeft, 
      spikeSize,
      brickAreaHeight    
    } = this.props;

    const magicNumber = 5;
    const ballLeftInSpikeWrapper = (spikeSize / 2) + magicNumber;
    const bulletLeft = spikeLeft + ballLeftInSpikeWrapper;

    const scale = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.7, 1.5]
    });

    const transform = Animated.template `
      scale(${scale})
    `;

    const textStyles = {
      marginTop: 40,
      opacity: this.animatedValue,
      transform
    };

    const targetTop = 180;
    // const (spikeSize / 2) + 27

    const bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: happySpikeNoCircle
    };

    return (
      <div>
        {!showConfetti && animateInBullet &&
          <Bullet
            bulletAnimationDuration={500}
            onAnimationFinished={this.bulletAnimationFinished}
            left={bulletLeft}
            size={40}
            initialTop={brickAreaHeight + (spikeSize / 2)}
            targetTop={targetTop} />
        }
        <Animated.div style={textStyles}>
          <SVGStrokeText fontSize={40} text="Nice Work!" />
        </Animated.div>
        
        <div style={{position: 'absolute', height: 40, top: targetTop + 100, left: bulletLeft + 20, width: 40}} className="confetti-start-wrapper">
          <Confetti active={showConfetti} config={fettiFig} />
        </div>
        <div style={{position: 'absolute', top: brickAreaHeight, left: spikeLeft, height: spikeSize, width: spikeSize}}>
          {!showHappySpike &&
            <ShooterSpike
              isShooting={true}
              spikeLeft={0} />
          }
          {showHappySpike &&
            <BodyMovin options={bodymovinOptions} />  
          }
        </div>
      </div>
    );
  }
}

export default withAudioPlayer(YouWinConfettiAnimation);