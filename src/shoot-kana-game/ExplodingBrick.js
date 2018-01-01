import React, { Component } from 'react';
import Animated from 'animated/lib/targets/react-dom';

export default class ExplodingBrick extends Component {
  constructor(props, context){
    super(props, context);
    this.animatedValue = new Animated.Value(0);
  };
  componentDidMount(){
    Animated.timing(this.animatedValue, {
      duration: 700,
      toValue: 1,
    }).start();
  }
  render(){
    const scale = this.animatedValue.interpolate({
      inputRange: [0, 0.1, 0.3, 0.6, 0.8, 1],
      outputRange: [1, 0.9, 2, 0.9, 2, 1]
    });

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });

    const { top, left, height, width } = this.props.brick;
    const style = {
      position: 'absolute',
      left,
      top,
      width,
      height,
      borderRadius: height,
      border: '1px solid #EBB657',
      opacity,
      transform: [{scale}],
      zIndex: 2
    };

    return (
      <Animated.div style={style}></Animated.div>
    );
  }
}
