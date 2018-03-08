export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST";
export const SIGN_UP_USER_REQUEST_SUCCESS = "SIGN_UP_USER_REQUEST_SUCCESS";
export const SIGN_UP_USER_REQUEST_FAILURE = "SIGN_UP_USER_REQUEST_FAILURE";

let signUpUserRequest = () => {
  return {
    type: SIGN_UP_USER_REQUEST
  };
};

let signUpUserRequestSuccess = newUser => {
  return {
    type: SIGN_UP_USER_REQUEST_SUCCESS,
    user: newUser
  };
};

let signUpUserRequestFailure = () => {
  return {
    type: SIGN_UP_USER_REQUEST_FAILURE
  };
};

let signUpUser = (newUser) => dispatch => {
  dispatch(signUpUserRequest())
  fetch(`api/v1/users`, {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  .then((response) => response.json())
  .then((response) => {
    debugger
  })
  .catch(() => dispatch(signUpUserRequestFailure()))
};

export { signUpUser };
