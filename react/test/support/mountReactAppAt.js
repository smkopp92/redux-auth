import Root from 'Root';
import routes from 'routes';
import createHistory from 'history/createBrowserHistory'
import configureStore from 'store/configureStore';

let mountReactAppAt = (url) => {
  let history = createHistory()
  let store = configureStore(history);
  store.dispatch(push(url));

  return mount(
    <Root store={store} history={history} routes={routes}/>
  );
}

export default mountReactAppAt;
