import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { startGettingCharacterData } from '../../actions/character.actions'

const CharacterProfile = () => {
  // The character may be passed via props, otherwise the name will be taken by the url
  const { name } = useParams()
  const dispatch = useDispatch()

  const { selectedCharacter } = useSelector(state => state.character)

  return <div>Character profile</div>
}

export default CharacterProfile
