import React, { Component } from "react";
// import PropTypes from 'prop-types';

export default class AudioPlayerProvider extends Component {
  static childContextTypes = {
    audioPlayer: PropTypes.object.isRequired
  };
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
