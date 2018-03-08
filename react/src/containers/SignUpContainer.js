import React from 'react';
import { connect }    from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { signUpUser } from '../actions/signUpUser';

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(newUser){
    this.props.signUpUser(newUser)
  }

  render(){
    return (
      <div>
        <h1>Sign Up!</h1>
        <SignUpForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {

  }
}

let mapDispatchToProps = dispatch => {
  return {
    signUpUser: (newUser) => dispatch(signUpUser(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
