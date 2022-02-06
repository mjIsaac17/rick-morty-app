import { httpRequest } from '../helpers/httpRequest'
import { setSnackbar } from './snackbar.action'

const characterEndpoint = 'character'

export const SUCCESS_GET = 'character/GET'
export const SUCCESS_GET_ALL = 'character/GET_ALL'
export const SUCCESS_GET_RECENT = 'character/GET_RECENT'

export const successGetCharacter = (character) => ({
  type: SUCCESS_GET,
  payload: character
})

const successGetCharacters = (characters) => ({
  type: SUCCESS_GET_ALL,
  payload: characters
})

export const startGettingCharacterData = (queryParams = {}, multipleCharacters = false) => {
  return async (dispatch) => {
    try {
      const response = await httpRequest(characterEndpoint, 'GET', queryParams)
      const characterData = await response.json()
      if (response.ok) {
        if (multipleCharacters) {
          dispatch(successGetCharacters(characterData))
        } else {
          dispatch(successGetCharacter(characterData.results[0]))
        }
      } else {
        dispatch(setSnackbar('error', characterData.error, true))
      }
    } catch (error) {
      dispatch(setSnackbar('error', error, true))
      console.log(error)
    }
  }
}

const successGetMostRecentCharacters = (characters) => ({
  type: SUCCESS_GET_RECENT,
  payload: characters
})

export const startGettingMostRecentCharacters = (charactersToShow = 12) => {
  return async (dispatch) => {
    try {
      // get character info to get the total of records
      const response = await httpRequest(characterEndpoint, 'GET')
      const charactersInfo = await response.json()
      if (response.ok) {
        const totalOfCharacters = charactersInfo.info.count
        // Get the last characters according to their id
        // Bigger id = newer character
        const limitToSearch = totalOfCharacters > charactersToShow
          ? totalOfCharacters - charactersToShow
          : totalOfCharacters

        let charactersToSearch = ''

        for (let id = totalOfCharacters; id > limitToSearch; id--) {
          charactersToSearch += `${id},`
        }
        // url example = https://rickandmortyapi.com/api/character/826,825,824
        const response = await httpRequest(`${characterEndpoint}/${charactersToSearch}`, 'GET')
        const recentCharacters = await response.json()

        if (response.ok) {
          dispatch(successGetMostRecentCharacters(recentCharacters))
        } else {
          dispatch(setSnackbar('error', recentCharacters.error, true))
        }
      } else {
        dispatch(setSnackbar('error', charactersInfo.error, true))
      }
    } catch (error) {
      dispatch(setSnackbar('error', error, true))
      console.log(error)
    }
  }
}
