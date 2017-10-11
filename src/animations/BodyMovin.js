import React from 'react';
import bodymovin from 'bodymovin/build/player/bodymovin_light';

// const bodymovinOptions = {
//   loop: true,
//   autoplay: true,
//   prerender: true,
//   animationData: animation
// }

export default class ReactBodymovin extends React.Component {
  componentDidMount () {
    const options = Object.assign({}, this.props.options);
    options.wrapper = this.wrapper;
    options.renderer = 'svg';
    this.animation = bodymovin.loadAnimation(options);
  }
  componentWillUnmount () {
    this.animation.destroy();
  }
  shouldComponentUpdate () {
    return false;
  }
  render () {
    const { style } = this.props;
    return (
      <div
        style={style}
        className='react-bodymovin-container'
        ref={el => this.wrapper = el} />
    );
  }
}
