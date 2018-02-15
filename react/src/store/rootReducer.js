import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
// import { ADD_NOTE_REQUEST_SUCCESS} from '../actions/addNote';

// import notes from '../reducers/notes';

let rootReducer = combineReducers({
  // form: formReducer.plugin({
  //   note: (state, action) => {
  //     switch(action.type) {
  //       case ADD_NOTE_REQUEST_SUCCESS:
  //         return undefined;
  //       default:
  //         return state;
  //     }
  //   },
  // notes,
  routing
});

export default rootReducer;
