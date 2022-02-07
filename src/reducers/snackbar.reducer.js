import { SET_SNACKBAR } from '../actions/snackbar.action'

const initialState = {
  type: 'error',
  message: '',
  open: false
}

const snackbarReducer = (state = initialState, action) => {
  const { type, message, open } = action.payload || initialState

  switch (action.type) {
    case SET_SNACKBAR:
      return {
        ...state,
        type,
        message,
        open
      }

    default: return state
  }
}

export default snackbarReducer
