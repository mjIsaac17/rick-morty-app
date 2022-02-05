import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { startGettingCharacterData } from '../../actions/character.actions'

const CharacterProfile = () => {
  // Get character name in the url, to use it if there is no selected chr. in the state
  const { name } = useParams()
  const dispatch = useDispatch()

  const { selectedCharacter: character } = useSelector(state => state.character)

  useEffect(() => {
    if (!character) {
      dispatch(startGettingCharacterData({ name }))
    }
  }, [dispatch, name])

  return (
    <>
      {character
        ? (
          <div className='character-profile'>
            <div className='character-profile__header'>
              <p>#{character.id} {character.name}</p>
            </div>
            <div className='character-profile__body'>
              <img src={character.image} alt={character.name} />
              <div className='character-profile__body__info'>
                <h3>Details:</h3>
                <hr />
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <br />
                <p>Type: {character.type}</p>
                <p>Species: {character.species}</p>
                <br />
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
              </div>
            </div>
          </div>)
        : <p>Loading...</p>}
    </>
  )
}

export default CharacterProfile
