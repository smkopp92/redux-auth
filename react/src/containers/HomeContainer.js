import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

class HomeContainer extends React.Component {
  render(){
    return (
      <div>
        <Link to="/signin"><h1>Sign In</h1></Link>
        <Link to="/signup"><h1>Sign Up</h1></Link>
      </div>
    )
  }
}

export default HomeContainer;
