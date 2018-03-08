import React from 'react';
import { Field, reduxForm } from 'redux-form';
import UsernameField from './UsernameField';
import PasswordField from './PasswordField';
import PasswordConfirmationField from './PasswordConfirmationField';

let validate = (formFields) => {
  const errors = {};

  if(!formFields.username) {
    errors['username'] = "Please enter a username";
  }
  if(!formFields.password) {
    errors['password'] = "Please enter a password";
  }
  if(!formFields.passwordConfirmation) {
    errors['passwordConfirmation'] = "Please confirm your password";
  }
  return errors;
}

let SignUpForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="username"
        label="Username"
        component={UsernameField}
        type="text"
      />
      <Field
        name="password"
        label="Password"
        component={PasswordField}
        type="text"
      />
      <Field
        name="password confirmation"
        label="Password Confirmation"
        component={PasswordConfirmationField}
        type="text"
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

SignUpForm = reduxForm({
  form: 'sign up',
  validate
})(SignUpForm)

export default SignUpForm;
