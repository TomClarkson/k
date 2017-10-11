import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import makeEpicMiddleware from './makeEpicMiddleware';

const configureStore = () => {
	const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const epicMiddleware = makeEpicMiddleware();

    const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware),
  // other store enhancers if any
);

  const store = createStore(rootReducer, {tick: 0, ticks: []}, enhancer)

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default configureStore
