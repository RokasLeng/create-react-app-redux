import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form'

import authReducer from './authReducer';
import taskReducer from './taskReducer/taskReducer';

export default combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  form: formReducer,
  routing: routerReducer
});