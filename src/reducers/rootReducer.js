import { combineReducers } from 'redux'
import characterReducer from './character.reducer'
import snackbarReducer from './snackbar.reducer'

const rootReducer = combineReducers({
  character: characterReducer,
  snackbar: snackbarReducer
})

export default rootReducer
