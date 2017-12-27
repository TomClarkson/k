import React from 'react';
import HomeBackground from './HomeBackground';

const playButtonStyles = {
  borderRadius: 10,
  padding: '5px 30px',
  fontFamily: 'Bangers',
  letterSpacing: 1,
  border: '3px solid #fff',
  fontSize: 20,
  background: '#ffac33',
  margin: '10px auto',
  cursor: 'pointer'
};

const LevelPreview = ({ gameWidth, gameHeight, startLevel, title, levelCharacters }) => {
  return (
    <HomeBackground
      onHeaderClick={startLevel}
      title={title}
      width={gameWidth}
      height={gameHeight}>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{flex: 1, overflowY: 'auto', width: '100%'}}>
          <div style={{height: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            {levelCharacters.map(((k, i) =>
              <div key={i}>
                <span style={{color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 5, display: 'block'}}>{k.character} - {k.romaji}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button onClick={startLevel} style={playButtonStyles}>Play</button>
        </div>
      </div>
    </HomeBackground>
  );
};

export default LevelPreview;
