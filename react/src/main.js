import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import Root from './Root'
import routes from './routes'
import configureStore from './store/configureStore';

const history = createHistory()
const store = configureStore(history);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store} history={history} routes={routes}/>,
    document.getElementById('root')
  )
})
