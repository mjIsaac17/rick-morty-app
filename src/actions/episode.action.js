import { httpRequest } from '../helpers/httpRequest'
import { setSnackbar } from './snackbar.action'

const edisodeEndpoint = 'episode'

export const SUCCESS_GET = 'episode/GET'
export const SUCCESS_GET_ALL = 'episode/GET_ALL'
export const SUCCESS_GET_RECENT = 'episode/GET_RECENT'
export const CLEAR_EPISODES = 'character/CLEAR_EPISODES'

export const successGetEpisode = (episode) => ({
  type: SUCCESS_GET,
  payload: episode
})

const successGetEpisodes = (episodes) => ({
  type: SUCCESS_GET_ALL,
  payload: episodes
})

const clearEpisodes = () => ({
  type: CLEAR_EPISODES
})

export const startGettingEpisodeData = (queryParams = {}, multipleEpisodes = false) => {
  return async (dispatch) => {
    try {
      const response = await httpRequest(edisodeEndpoint, 'GET', queryParams)
      const episodeData = await response.json()
      if (response.ok) {
        if (multipleEpisodes) {
          dispatch(successGetEpisodes(episodeData))
        } else {
          dispatch(successGetEpisode(episodeData.results[0]))
        }
      } else {
        if (multipleEpisodes) dispatch(clearEpisodes)
        dispatch(setSnackbar('error', 'Episode not found', true))
      }
    } catch (error) {
      dispatch(setSnackbar('error', error, true))
      console.log(error)
    }
  }
}

const successGetMostRecentEpisodes = (episodes) => ({
  type: SUCCESS_GET_RECENT,
  payload: episodes
})

export const startGettingMostRecentEpisodes = (episodesToShow = 12) => {
  return async (dispatch) => {
    try {
      // get episode info to get the total of records
      const response = await httpRequest(edisodeEndpoint, 'GET')
      const episodesInfo = await response.json()
      if (response.ok) {
        const totalOfEpisodes = episodesInfo.info.count
        // Get the last episodes according to their id
        // Bigger id = newer episode
        const limitToSearch = totalOfEpisodes > episodesToShow
          ? totalOfEpisodes - episodesToShow
          : totalOfEpisodes

        let episodesToSearch = ''

        for (let id = totalOfEpisodes; id > limitToSearch; id--) {
          episodesToSearch += `${id},`
        }
        // url example = https://rickandmortyapi.com/api/episode/826,825,824
        const response = await httpRequest(`${edisodeEndpoint}/${episodesToSearch}`, 'GET')
        const recentEpisodes = await response.json()

        if (response.ok) {
          dispatch(successGetMostRecentEpisodes(recentEpisodes))
        } else {
          dispatch(setSnackbar('error', recentEpisodes.error, true))
        }
      } else {
        dispatch(setSnackbar('error', episodesInfo.error, true))
      }
    } catch (error) {
      dispatch(setSnackbar('error', error, true))
      console.log(error)
    }
  }
}
