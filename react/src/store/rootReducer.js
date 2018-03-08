import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { SIGN_UP_USER_REQUEST_SUCCESS } from '../actions/signUpUser';

import currentUser from '../reducers/currentUser';

let rootReducer = combineReducers({
  form: formReducer.plugin({
    signup: (state, action) => {
      switch(action.type) {
        case SIGN_UP_USER_REQUEST_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  }),
  currentUser,
  routing
});

export default rootReducer;
