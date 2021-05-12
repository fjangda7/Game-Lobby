import playerReducer from './playerReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  player: playerReducer,
  firestore: firestoreReducer
});

export default rootReducer
