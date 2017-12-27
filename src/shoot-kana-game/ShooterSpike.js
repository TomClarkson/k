import React from 'react';
import bodymovin from 'bodymovin/build/player/bodymovin_light';
import spikeThrowingBallAnimation from './spikeThrowingBallUntilRelease.json';
import { Motion, spring } from 'react-motion';

const options = {
  loop: false,
  autoplay: false,
  prerender: true,
  animationData: spikeThrowingBallAnimation
};

export default class ShooterSpike extends React.Component {
  componentDidMount () {
    options.wrapper = this.wrapper;
    options.renderer = 'svg';
    this.animation = bodymovin.loadAnimation(options);

    if(this.props.isShooting) {
      this.playAnimation();
    }
  }
  componentWillUnmount () {
    this.animation.destroy();
  }
  playAnimation = () => {
    this.animation.play();
  };
  stopAnimation = () => {
    this.animation.goToAndStop(0, true);
  };
  componentWillReceiveProps(nextProps) {
    if(!this.props.isShooting && nextProps.isShooting) {
      this.playAnimation();
    }
    if(this.props.isShooting && !nextProps.isShooting) {
      this.stopAnimation();
    }
  }
  render () {
    const { spikeLeft } = this.props;
    return (
      <Motion style={{left: spring(spikeLeft)}}>
        {({left}) =>
          <div
            style={{transform: `translateX(${left}px)`}}
            className='react-bodymovin-container'
            ref={el => this.wrapper = el} />
        }
      </Motion>
    );
  }
}
