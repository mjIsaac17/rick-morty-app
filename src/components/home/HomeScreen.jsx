import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGettingMostRecentCharacters } from '../../actions/character.actions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  // selectors
  const { recentCharacterList } = useSelector(state => state.character)
  console.log(recentCharacterList)

  useEffect(() => {
    if (recentCharacterList.length === 0) {
      console.log('effect load characters')
      dispatch(startGettingMostRecentCharacters())
    }
  }, [dispatch, recentCharacterList.length])

  return <div>Home</div>
}

export default HomeScreen
