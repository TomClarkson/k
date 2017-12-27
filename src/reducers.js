import kanaShootGame from './reducer';
import { combineReducers } from 'redux';
import kanaDataReducer from './kanaData/kanaDataReducer';

export default combineReducers({
  kanaShootGame,
  kanaData: kanaDataReducer
});