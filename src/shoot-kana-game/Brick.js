import React from 'react';
import bubbleCurve from './bubbleCurve.svg';
import Animated from 'react-dom-animated';

const wrongBubbleStyles = {
  position: 'absolute',
  top: -20,
  zIndex: -1,
  borderRadius: 50,
  right: -20,
  height: 50,
  width: 50,
  background: '#F7DEE0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red'
};

class IncorrectAnswerBubble extends React.Component {
  constructor(props) {
    super(props);
    this.opacityAnimated = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.spring(this.opacityAnimated, {
      toValue: 1
    }).start();
  }
  render() {
    const { romaji } = this.props;
    return (
      <Animated.div style={{
        ...wrongBubbleStyles,
        opacity: this.opacityAnimated
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
          <IncorrectAnswerBubble romaji={romaji} />
        }
        <span>{character}</span>
      </div>
    </div>
  );
};

export default Brick;
