import React from 'react';
import bubbleCurve from './bubbleCurve.svg';
import Animated from 'react-dom-animated';

class IncorrectAnswerBubble extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1
    }).start();
  }
  makeWrongBubbleDimensionStyles = () => {
    if(this.props.brickHeight === 40) {
      return {
        top: -10,
        borderRadius: 35,
        right: -24,
        height: 35,
        width: 35,
      };
    }

    return {
      top: -20,
      borderRadius: 50,
      right: -20,
      height: 50,
      width: 50,
    }
  }
  makeWrongBubbleStyles = () => {
    const bubbleDimensionStyles = this.makeWrongBubbleDimensionStyles();

    const baseStyles = {
      position: 'absolute',
      zIndex: -1,
      background: '#F7DEE0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red'
    };

    return {
      ...baseStyles,
      ...bubbleDimensionStyles
    };
  }
  render() {
    const { romaji } = this.props;

    const wrongBubbleStyles = this.makeWrongBubbleStyles();

    const scale = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1]
    });

    return (
      <Animated.div style={{
        ...wrongBubbleStyles,
        opacity: this.animatedValue,
        transform: [ { scale } ]
      }}>
        <span style={{paddingBottom: 5}}>{romaji}</span>
      </Animated.div>
    );
  }
}

const Brick = ({ brick }) => {
  const { top, left, height, width, character, romaji, userAnsweredWrong } = brick;
  return (
    <div style={{
      position: 'absolute',
      transform: `translate3d(${left}px, ${top}px, 0)`,
      width,
      height,
      zIndex: 99
    }}>
      <img alt="" src={bubbleCurve} style={{zIndex: 3, position: 'absolute', height: (height / 2), width: (width / 2)}} />
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#EBB657',
        borderRadius: height,
        color: '#fff',
        width,
        height
      }}>
        {userAnsweredWrong &&
          <IncorrectAnswerBubble brickHeight={height} romaji={romaji} />
        }
        <span>{character}</span>
      </div>
    </div>
  );
};

export default Brick;
