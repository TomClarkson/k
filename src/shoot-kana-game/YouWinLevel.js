import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';
import LevelPreview from './LevelPreview';

const setCompleteStyles = {
  centerAbsolute: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const config = {
  angle: 90,
  spread: 90,
  startVelocity: 30,
  elementCount: 170,
  decay: 0.95
};

export default class YouWinLevel extends Component {
  state = {
    showConfetti: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({showConfetti: true});
    }, 10);
  }
  render() {
    const { gameHeight, gameWidth } = this.props;
    return (
      <div style={{height: gameHeight, width: gameWidth, position: 'relative'}}>
        <div style={setCompleteStyles.centerAbsolute}>
          <div style={{height: 40, width: 40}} className="confetti-start-wrapper">
            <Confetti active={this.state.showConfetti} config={config} />
          </div>
        </div>
        <LevelPreview 
          showConfetti={true}
          levelCharacters={[]}
          title="Next level"
          gameWidth={gameWidth} 
          gameHeight={gameHeight} 
          startLevel={() => console.log('start level')} />
      </div>
    );
  }
}
