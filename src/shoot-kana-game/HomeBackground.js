import React, { Component } from 'react';
import homeBackgroundSVG from './HomeBackground.svg';

const selectBoxWrapperStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const selectBoxBaseStyles = {
  display: 'flex',
  background: '#363636',
  border: '5px solid #fff',
  borderRadius: 30,
  paddingTop: 40,
  position: 'relative'
};

const titleStyles = {
  position: 'absolute',
  top: -20,
  height: 50,
  background: '#FFAC33',
  left: 40,
  right: 40,
  border: '4px solid #fff',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Bangers',
  fontSize: 24,
  letterSpacing: 1
};

export default class HomeBackground extends Component {
  static defaultProps = {
    onHeaderClick: null
  }
  render() {
    const { height, width, title, children, onHeaderClick } = this.props;

    const selectBoxStyles = {
      ...selectBoxBaseStyles,
      height: height * 0.5,
      width: width * 0.8
    };

    const wrapperStyles = {
      background: '#FFE66F',
      display: 'flex',
      height,
      width,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const cursorStyles = onHeaderClick ? {cursor: 'pointer'} : {};

    return (
      <div style={wrapperStyles}>
        <img ref={el => this.img = el} style={{height, width}} src={homeBackgroundSVG} alt="" />
        <div style={selectBoxWrapperStyles}>
          <div style={selectBoxStyles}>
            <div style={{...titleStyles, ...cursorStyles}} onClick={onHeaderClick}>{title}</div>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
