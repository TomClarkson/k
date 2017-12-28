import React, { Component } from 'react';
import Animated from 'react-dom-animated';

export default class Bullet extends Component {
  static defaultProps = {
    bulletAnimationDuration: 700
  };
  constructor(props, context){
    super(props, context);
    this.animatedValue = new Animated.Value(0);
  };
  componentDidMount(){
    Animated.timing(this.animatedValue, {
      duration: this.props.bulletAnimationDuration,
      toValue: 1,
    }).start(() => this.props.onAnimationFinished());
  }
  render(){
    const { left, size, initialTop, targetTop } = this.props;
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [initialTop, targetTop]
    });

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.4]
    });

    const transform = Animated.template `
      translate3d(${left}px, ${top}px, 0)
    `;

    const style = {
      position: 'absolute',
      transform,
      opacity,
      width: size,
      height: size,
      borderRadius: size,
      background: '#EBB657',
      zIndex: 2
    };

    return (
      <Animated.div style={style}></Animated.div>
    );
  }
}
