import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CharacterList from './CharacterList'
import { startGettingCharacterData } from '../../actions/character.action'
import CustomPagination from '../ui/CustomPagination'

const CharactersScreen = () => {
  console.log('<CharacterScreen />')
  const { name = '' } = useParams()
  const dispatch = useDispatch()

  // selectors
  const { characterList, info } = useSelector(state => state.character)
  const { currentPage } = useSelector(state => state.pagination)

  useEffect(() => {
    dispatch(startGettingCharacterData({ page: currentPage, name }, true))
  }, [dispatch, name, currentPage])

  return (
    <div>
      <CharacterList characters={characterList} />
      {info.pages > 1 && <CustomPagination totalPages={info.pages} />}
    </div>
  )
}

export default CharactersScreen
