import React, { Component } from 'react';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

export default class PointPlusBox extends Component {
  constructor(props, context){
    super(props, context);
    this.animatedValue = new Animated.Value(0);
  };
  componentDidMount(){
    this.animate();
  }
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce
      }
    ).start(this.props.onAnimationFinished);
  }
  render(){
    const y = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [30, 0, 10]
    });

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.95, 1],
      outputRange: [0, 1, 0]
    });

    const scale = this.animatedValue.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [1, 1.4, 1]
    });

    const animateStyle = {
      zIndex: 3,
      opacity,
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      willChange: 'transform',
      transform: Animated.template `
        translateY(${y}px)
        scale(${scale})
      `
    };

    return(
      <div style={{display: 'flex', justifyContent: 'center', height: 40, width: 40, position: 'relative'}}>
        <Animated.div style={animateStyle}>
          <span style={{fontSize: 26, fontFamily: 'Bangers', color: '#fff', textShadow: '0px 1px 6px #333'}}>+1</span>
        </Animated.div>
      </div>
    );
  }
}
