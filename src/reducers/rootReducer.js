import { combineReducers } from 'redux'
import characterReducer from './character.reducer'
import paginationReducer from './pagination.reducer'
import snackbarReducer from './snackbar.reducer'

const rootReducer = combineReducers({
  character: characterReducer,
  snackbar: snackbarReducer,
  pagination: paginationReducer
})

export default rootReducer
