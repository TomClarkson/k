import { createEpicMiddleware } from 'redux-observable';
import configureEpics from './configureEpics';

export default function() {
	var epicMiddleware = createEpicMiddleware(configureEpics());

	module.hot.accept('./configureEpics', () => {
	  const configureEpics = require('./configureEpics').default;

	  epicMiddleware.replaceEpic(configureEpics());
	});
	
	return epicMiddleware;
}