import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_REQUEST_SUCCESS,
  SIGN_UP_USER_REQUEST_FAILURE
} from '../actions/signUpUser';

let initialState = {
  currentUser: null,
  isFetching: false
}

const currentUser = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_UP_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case SIGN_UP_USER_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.user,
        isFetching: false
      });
    case SIGN_UP_USER_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

export default currentUser;
