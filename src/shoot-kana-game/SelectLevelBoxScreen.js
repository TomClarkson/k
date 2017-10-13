import React from 'react';

const boxStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 20,
  background: '#fff',
  color: '#333',
  fontSize: 20,
  borderRadius: 60,
  height: 60,
  width: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};

const Box = ({ onClick, title }) => (
  <div onClick={onClick} style={boxStyle}>
    {title}
  </div>
);

const SelectLevelBoxScreen = ({ boxes, onSelectLevel }) => {
  return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflowY: 'auto'
      }}>
        {boxes.map((b, i) =>
          <Box
            key={i}
            title={b.title}
            onClick={() => onSelectLevel(i)}
          />
        )}
      </div>
    </div>
  );
};

export default SelectLevelBoxScreen;
