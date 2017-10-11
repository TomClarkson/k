import React from 'react';

const buttonStyles = {
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 20,
  padding: 10,
  fontFamily: 'Bangers',
  fontSize: 24,
  cursor: 'pointer',
  letterSpacing: 1
};

const SelectHiriganaKatakanaScreen = ({ selectHirigana, selectKatakana }) => {
  return (
    <div style={{display: 'flex', padding: 40, flexDirection: 'column', height: '100%', justifyContent: 'center'}}>
      <button style={{...buttonStyles, marginBottom: 20}} onClick={selectHirigana}>Hirigana</button>
      <button style={buttonStyles} onClick={selectKatakana}>Katakana</button>
    </div>
  );
};

export default SelectHiriganaKatakanaScreen;
