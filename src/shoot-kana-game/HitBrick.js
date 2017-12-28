import React, { Component } from 'react';
import PointPlusBox from './PointPlusBox';
import Brick from './Brick';
import Bullet from './Bullet';
// import bubblePop1 from './sounds/bubblePop1.mp3';
// import bubblePop2 from './sounds/bubblePop2.mp3';
// import bubblePop3 from './sounds/bubblePop3.mp3';
import ExplodingBrick from './ExplodingBrick';

// const popSounds = [bubblePop1, bubblePop2, bubblePop3];

const bulletSize = 40;

class HitBrick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletLeft: props.brick.left + (props.brick.width / 2) - (bulletSize / 2),
      isAnimatingBullet: true
    };
  }
  bulletAnimationFinished = () => {
    this.setState({
      isAnimatingBullet: false
    });

    // const sound = popSounds[Math.floor(Math.random()*popSounds.length)];
    // (new Audio(sound)).play();

    this.props.brickHitByBullet(this.props.brick.id);
  };
  plusBoxAnimationFinished = () => {
    this.props.hitBrickAnimationFinished(this.props.brick.id);
  };
  render() {
    const { isAnimatingBullet } = this.state;
    const { brick, ballStartTop } = this.props;
    const { top, left, height, width } = brick;

    return (
      <div>
        {isAnimatingBullet &&
          <Brick brick={brick} />
        }
        {isAnimatingBullet &&
          <Bullet
            onAnimationFinished={this.bulletAnimationFinished}
            left={this.state.bulletLeft}
            size={40}
            initialTop={ballStartTop}
            targetTop={top + height - 10} />
        }
        {!isAnimatingBullet &&
          <ExplodingBrick brick={brick} />
        }
        {!isAnimatingBullet &&
          <div style={{
            position: 'absolute',
            transform: `translate3d(${left}px, ${top}px, 0)`,
            width,
            height}}>
            <PointPlusBox
              onAnimationFinished={this.plusBoxAnimationFinished} />
          </div>
        }
      </div>
    );
  }
}

export default HitBrick;
