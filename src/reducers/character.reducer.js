import { CLEAR_CHARACTERS, SUCCESS_GET, SUCCESS_GET_ALL, SUCCESS_GET_RECENT } from '../actions/character.action'

const initialState = {
  characterList: [],
  info: {
    count: 0
  },
  recentCharacterList: [],
  selectedCharacter: null
}

const characterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_GET:
      return {
        ...state,
        selectedCharacter: action.payload
      }
    case SUCCESS_GET_ALL:
      return {
        ...state,
        characterList: action.payload.results,
        info: action.payload.info
      }
    case SUCCESS_GET_RECENT:
      return {
        ...state,
        recentCharacterList: action.payload.reverse()
      }
    case CLEAR_CHARACTERS:
      return {
        ...state,
        characterList: [],
        info: initialState.info
      }

    default: return state
  }
}

export default characterReducer
