import { combineReducers } from 'redux';
import MainContainerReducer from './containers/MainContainer/MainContainerReducer';

export default combineReducers({
  MainContainerState : MainContainerReducer
});
