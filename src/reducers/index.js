import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // 命名reducer
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});