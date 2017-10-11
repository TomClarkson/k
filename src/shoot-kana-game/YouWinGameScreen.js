import React, { Component } from 'react';
import SVGStrokeText from '../svg-stroke-text/SVGStrokeText';
import Animated from 'react-dom-animated';
import successSound from './sounds/winLevel.mp3';

export default class YouWinGameScreen extends Component {
  constructor(props, context){
    super(props, context);
    this.animation = new Animated.Value(0);
  };
  componentDidMount(){
    (new Audio(successSound)).play();
    Animated.spring(this.animation, {
      toValue: 1,
      velocity: 0.3,
      tension: 0.2
    }).start()
  }
  render(){
    const scale = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2]
    });

    const transform = Animated.template `
      scale(${scale})
    `;

    const style = {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      height: '100%',
      border: '1px solid #333',
      flexDirection: 'column',
    };

    const animatedStyle = {
      opacity: this.animation,
      transform
    };

    const { goToNextLevel } = this.props;

    return(
      <div style={style}>
        <Animated.div style={animatedStyle}>
          <SVGStrokeText fontSize={40} text="You Win" />
        </Animated.div>
        <Animated.div style={{opacity: this.animation, transform}}>
          <button onClick={goToNextLevel}>Go to next level</button>
        </Animated.div>
      </div>
    );
  }
}
