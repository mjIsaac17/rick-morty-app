import { CLEAR_EPISODES, SUCCESS_GET, SUCCESS_GET_ALL, SUCCESS_GET_RECENT } from '../actions/episode.action'

const initialState = {
  episodeList: [],
  info: {
    count: 0
  },
  recentEpisodeList: [],
  selectedEpisode: null
}

const episodeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_GET:
      return {
        ...state,
        selectedEpisode: action.payload
      }
    case SUCCESS_GET_ALL:
      return {
        ...state,
        episodeList: action.payload.results,
        info: action.payload.info
      }
    case SUCCESS_GET_RECENT:
      return {
        ...state,
        recentEpisodeList: action.payload.reverse()
      }
    case CLEAR_EPISODES:
      return {
        ...state,
        episodeList: [],
        info: initialState.info
      }

    default: return state
  }
}

export default episodeReducer
