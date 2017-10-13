import { createEpicMiddleware } from 'redux-observable';
import configureEpics from './configureEpics';

export default function() {
	var epicMiddleware = createEpicMiddleware(configureEpics());

	if (process.env.NODE_ENV !== "production") {
		module.hot.accept('./configureEpics', () => {
			const configureEpics = require('./configureEpics').default;
	
			epicMiddleware.replaceEpic(configureEpics());
		});
	}
	
	return epicMiddleware;
}