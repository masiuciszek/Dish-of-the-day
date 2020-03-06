/* eslint-disable import/extensions */
import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>


export const configureStore = () => {
  const logger = createLogger();
  const middleWares: Middleware[] = [];
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger, thunk);
  }
  if (process.env.NODE_ENV === 'production') {
    middleWares.push(thunk);
  }
  if (process.env.NODE_ENV === 'test') {
    middleWares.push(logger, thunk);
  }
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );
  return store;
};
