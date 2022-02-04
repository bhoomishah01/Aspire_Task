import {combineReducers} from 'redux';
import {loginReducer} from './AuthenticationReducer';

const appReducer = combineReducers({
  loginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'API_LOGOUT_SUCCESS') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
