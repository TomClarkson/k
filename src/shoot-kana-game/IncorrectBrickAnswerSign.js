import React from 'react';

const signHeight = 20;

const IncorrectBrickAnswerSign = ({ brick }) => {
  const { top, left, width } = brick;
  return (
    <div style={{
      position: 'absolute',
      transform: `translate3d(${left}px, ${top - signHeight}px, 0)`,
      width,
      height: signHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'red',
      color: '#fff'
    }}>
      {brick.romaji}
    </div>
  );
};

export default IncorrectBrickAnswerSign;
