import {combineReducers} from 'redux';
import {UserReducer} from './reducers/UserReducer';
import {TodoReducer} from './reducers/TodoReducer';

export default combineReducers({
  UserReducer,
  TodoReducer,
});