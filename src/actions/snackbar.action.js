export const SET_SNACKBAR = 'snackbar/SET'

export const setSnackbar = (type = 'error', message = '', open = false) => ({
  type: SET_SNACKBAR,
  payload: { type, message, open }
})
