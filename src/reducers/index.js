import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import section from './section';

const rootReducer = combineReducers({
  section,
  router: routerStateReducer,
  form: formReducer,
});

export default rootReducer;
