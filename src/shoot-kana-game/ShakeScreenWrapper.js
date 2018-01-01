import React, { Component } from 'react';
import Animated from 'react-dom-animated';
import { withAudioPlayer } from '../AudioPlayerProvider';

class ShakeScreenWrapper extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.userAnswerIsIncorrect && !this.props.userAnswerIsIncorrect) {
      this.triggerAnimation();
    }
  }
  triggerAnimation = () => {
    this.props.audioPlayer.play('shakeKanaShooterScreen');

    this.animatedValue.setValue(0);
    // import Easing from 'animated/lib/Easing';
    Animated.spring(this.animatedValue, {
      duration: 300,
      toValue: 3,
      // ease: Easing.bounce
    }).start();
  }
  render() {
    const x = this.animatedValue.interpolate({
      inputRange: [0, .5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -10, 0, 10, 0, -10, 0]
    });
    const style = {
      position: 'relative',
      willChange: 'transform',
      transform: Animated.template `
        translateX(${x}px)
      `
    };
    return (
      <Animated.div style={style}>
        {this.props.children}
      </Animated.div>
    );
  }
}

export default withAudioPlayer(ShakeScreenWrapper);
