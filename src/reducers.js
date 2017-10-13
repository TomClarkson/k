import kanaShootGame from './reducer';
import { combineReducers } from 'redux';

export default combineReducers({kanaShootGame});

// const rootReducer = (state, action) => {
//   switch (action.type) {
//     case "tick":
//       return {...state, tick: state.tick + 1}
//     default:
//       return state
//   }
// }

// export default rootReducer
