import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';

let routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/signin" component={SignInContainer}/>
      <Route path="/signup" component={SignUpContainer}/>
    </Switch>
  </div>
);

export default routes;
