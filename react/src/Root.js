import React from 'react'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

const Root = ({store, history, routes}) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  )
}

export default Root;
