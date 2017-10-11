import React, { Component } from 'react';
import './svg.css';

export default class SVGStrokeText extends Component {
  static defaultProps = {
    fontSize: 36
  };
  render(){
    const { text, fontSize, strokeWidth } = this.props;
    const style = {fontSize};
    const stokeWidthStyle = strokeWidth ? { strokeWidth } : strokeWidth;
    const withStrokeWidthStyle = {...style, ...stokeWidthStyle};
    return (
      <svg className="stroke-svg" role="img">
        <text className="text text-stroke"
              style={withStrokeWidthStyle}
              dominantBaseline="central"
              fill="#222"
              stroke="#222"
              strokeLinecap="round"
              textAnchor="middle"
              x="50%"
              y="50%">
          {text}</text>
        <text className="text"
              style={style}
              dominantBaseline="central"
              fill="white"
              textAnchor="middle"
              x="50%"
              y="50%">
          {text}
        </text>
      </svg>
    );
  }
}

