import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';

let routes = (
  <div>
    <Switch>
      <Route path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default routes;
