import React from 'react';
import { connect } from 'react-redux';
import { getBottomBrick } from '../reducer';
import { Motion, spring } from 'react-motion';

const ShooterPresentation = ({shooterWidth = 30, shooterLeftPosition = 100}) => (
  <div style={{height: 50, position: 'relative'}}>
    <Motion style={{left: spring(shooterLeftPosition)}}>
      {({left}) =>
        <div style={{height: 30, width: shooterWidth, position: 'absolute', transform: `translateX(${left}px)`, background: 'green'}}>

        </div>
      }
    </Motion>

  </div>
);

const mapStateToProps = (state) => {
  const { shooterWidth, gameWidth, bricks } = state.kanaShootGame;
  const bottomBrick = getBottomBrick(bricks);

  if(bottomBrick) {
    return {
      shooterWidth,
      shooterLeftPosition: bottomBrick.left + (bottomBrick.width / 2) - (shooterWidth / 2)
    };
  }

  return {
    shooterWidth,
    shooterLeftPosition: gameWidth / 2 - (shooterWidth / 2)
  };
};

export default connect(
  mapStateToProps
)(ShooterPresentation);
