import { SET_PAGE } from '../actions/pagination.action'

const initialState = {
  currentPage: 1,
  totalPages: 1
}

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    default: return state
  }
}

export default paginationReducer
