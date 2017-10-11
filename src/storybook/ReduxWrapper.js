import React, { Component } from 'react';
import configureStore from '../configureStore';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import { compose } from 'redux';

export default class ReduxWrapper extends Component {
  static defaultProps = {
    initialState: {},
    withUser: false,
    devTools: false
  };
  constructor(props) {
    super(props);
    const { withUser, initialState } = this.props;
    const initialStateWithUser = !withUser ? initialState : {
        ...initialState,
        auth: {
          loggedIn: true,
          user: withUser
        }
      };

    const composeEnhancers = !props.devTools ?
      compose :
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const options = {
      composeEnhancers,
      initialState: {
        ...initialStateWithUser,
        device: {
          isReactNative: false,
          isOnline: true,
          platform: 'web',
          isStorybook: true
        }
      },
      platformDeps: {
        uuid: uuid.v4
      }
    };

    const store = configureStore(options);
    props.initialActions.forEach(store.dispatch);
    this.store = store;
  }
  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}
