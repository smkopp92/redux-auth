import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

let configureStore = (history) => {
  let middlewares = [thunkMiddleware, routerMiddleware(history)];
  let store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  );

  return store
};

export default configureStore;
