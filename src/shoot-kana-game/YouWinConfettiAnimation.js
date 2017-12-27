import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';
import Bullet from './Bullet';
import SVGStrokeText from '../svg-stroke-text/SVGStrokeText';
import Animated from 'react-dom-animated';

const bulletSize = 40;

const fettiFig = {
  angle: 90,
  spread: 70,
  startVelocity: 16,
  elementCount: 180,
  decay: 0.94
};

export default class YouWinConfettiAnimation extends Component {
  constructor(props, context){
    super(props, context);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      showConfetti: false
    };
  };
  componentDidMount() {
    setTimeout(() => {
      this.animateTextIn();
    }, 500);
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
    const { showConfetti } = this.state;
    const { ballStartTop, spikeLeft, spikeSize } = this.props;
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

    const targetTop = 200;
    // const (spikeSize / 2) + 27
    return (
      <div>
        {!showConfetti &&
          <Bullet
          onAnimationFinished={this.bulletAnimationFinished}
          left={bulletLeft}
          size={40}
          initialTop={ballStartTop}
          targetTop={targetTop} />
        }
        <Animated.div style={textStyles}>
          <SVGStrokeText fontSize={40} text="Nice Work!" />
        </Animated.div>
        
        <div style={{position: 'absolute', height: 40, top: targetTop, left: bulletLeft - 20, width: 40}} className="confetti-start-wrapper">
          <Confetti active={showConfetti} config={fettiFig} />
        </div>
      </div>
    );
  }
}