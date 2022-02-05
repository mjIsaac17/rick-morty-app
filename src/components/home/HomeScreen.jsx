import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGettingMostRecentCharacters } from '../../actions/character.actions'
import CharacterList from '../character/CharacterList'

const charactersToShow = 12

const HomeScreen = () => {
  const dispatch = useDispatch()

  // selectors
  const { recentCharacterList } = useSelector(state => state.character)
  console.log(recentCharacterList)

  useEffect(() => {
    if (recentCharacterList.length === 0) {
      console.log('effect load characters')
      dispatch(startGettingMostRecentCharacters(charactersToShow))
    }
  }, [dispatch, recentCharacterList.length])

  return (
    <div>
      <CharacterList characters={recentCharacterList} />
    </div>
  )
}

export default HomeScreen
