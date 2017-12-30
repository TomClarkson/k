import React, { Component } from "react";
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

import bubblePop1 from './shoot-kana-game/sounds/bubblePop1.mp3';
import bubblePop2 from './shoot-kana-game/sounds/bubblePop2.mp3';
import bubblePop3 from './shoot-kana-game/sounds/bubblePop3.mp3';
import winLevelSound from './shoot-kana-game/sounds/winLevel.mp3';

export const withAudioPlayer = (Component) => {
  return class AudioPlayerWrapper extends React.Component {
    static contextTypes = {
      audioPlayer: PropTypes.object
    }
    render() {
      return (
        <Component 
          {...this.props} 
          audioPlayer={this.context.audioPlayer} />
      );
    }
  }
}

export default class AudioPlayerProvider extends Component {
  static childContextTypes = {
    audioPlayer: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.audioPlayer = new AudioPlayer();
    this.audioPlayer.addAudios([
      {
        name: 'bubblePop1',
        audio: bubblePop1
      },
      {
        name: 'bubblePop2',
        audio: bubblePop2
      },
      {
        name: 'bubblePop3',
        audio: bubblePop3
      },
      {
        name: 'winLevel',
        audio: winLevelSound
      }
    ]);
  }
  getChildContext() {
    return {audioPlayer: this.audioPlayer};
  }
  render() {
    return this.props.children;
  }
}

// export default class ModalWrapper extends Component {
//   static contextTypes = {
//     store: PropTypes.object.isRequired
//   }
//   componentDidMount() {
//     const modalNode = document.createElement('div');
//     document.body.appendChild(modalNode);
//     modalNode.classList.add('modal-root');
//     this.modalNode = modalNode;
//     this.renderModal(this.props);
//   } 
//   componentWillUnmount() {
//     unmountComponentAtNode(this.modalNode);
//   } 
//   componentWillReceiveProps(nextProps) {
//     this.renderModal(nextProps);
//   }
//   renderModal(props) {
//     const wrapperStyle = {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       bottom: 0,
//       right: 0,
//       zIndex: 99
//     };
//     const element = (
//       <Provider store={this.context.store}>
//         <div style={wrapperStyle}>
//           <ModalPresentation {...props} />
//         </div>
//       </Provider>
//     ); 
//     render(element, this.modalNode);
//   }



//   Router.prototype.getChildContext = function getChildContext() {
//     return {
//       router: _extends({}, this.context.router, {
//         history: this.props.history,
//         route: {
//           location: this.props.history.location,
//           match: this.state.match
//         }
//       })
//     };
//   };


// Router.contextTypes = {
//   router: PropTypes.object
// };
// Router.childContextTypes = {
//   router: PropTypes.object.isRequired
// };
