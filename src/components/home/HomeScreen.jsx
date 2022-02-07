import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGettingMostRecentCharacters } from '../../actions/character.action'
import { startGettingMostRecentEpisodes } from '../../actions/episode.action'
import CharacterList from '../character/CharacterList'
import EpisodeList from '../episode/EpisodeList'

const charactersToShow = 12
const episodesToShow = 12

const HomeScreen = () => {
  // console.log('<HomeScreen />')
  const dispatch = useDispatch()

  // selectors
  const { recentCharacterList } = useSelector(state => state.character)
  const { recentEpisodeList } = useSelector(state => state.episode)

  useEffect(() => {
    if (recentCharacterList.length === 0) {
      dispatch(startGettingMostRecentCharacters(charactersToShow))
    }
    if (recentEpisodeList.length === 0) {
      dispatch(startGettingMostRecentEpisodes(episodesToShow))
    }
  }, [dispatch, recentCharacterList.length, recentEpisodeList.length])

  return (
    <div>
      <CharacterList characters={recentCharacterList} title='Most recent characters' />
      <EpisodeList episodes={recentEpisodeList} title='Most recent episodes' />
    </div>
  )
}

export default HomeScreen
