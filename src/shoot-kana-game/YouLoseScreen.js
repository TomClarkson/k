import React, { Component } from 'react';
import SVGStrokeText from '../svg-stroke-text/SVGStrokeText';
import Animated from 'react-dom-animated';
import { connect } from 'react-redux';
import { startLevel } from '../actions';

class YouLoseScreen extends Component {
  constructor(props, context){
    super(props, context);
    this.animation = new Animated.Value(0);
  };
  componentDidMount(){
    // (new Audio(successSound)).play();
    setTimeout(() => {
      Animated.spring(this.animation, {
        toValue: 1,
        velocity: 0.3,
        tension: 0.2
      }).start();
    }, 1000);
  }
  tryAgain = () => {
    this.props.startLevel(this.props.currentLevelIndex);
  };
  render(){
    const scale = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2]
    });

    const transform = Animated.template `
      scale(${scale})
    `;

    const style = {
      opacity: this.animation,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      height: '100%',
      border: '1px solid #333',
      flexDirection: 'column',
      background: '#d14233',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 100
    };

    const animatedStyle = {
      opacity: this.animation,
      transform
    };

    return(
      <Animated.div style={style}>
        <Animated.div style={animatedStyle}>
          <SVGStrokeText fontSize={40} text="You Lose" />
        </Animated.div>
        <Animated.div style={{opacity: this.animation, transform}}>
          <button onClick={this.tryAgain}>Try again</button>
        </Animated.div>
      </Animated.div>
    );
  }
}

export default connect(
  state => ({
    currentLevelIndex: state.kanaShootGame.currentLevelIndex
  }),
  { startLevel }
)(YouLoseScreen);
