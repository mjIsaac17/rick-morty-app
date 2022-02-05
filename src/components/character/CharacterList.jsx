import CharacterCard from './CharacterCard'
import './character.css'

const CharacterList = ({ characters }) => {
  return (
    <div className='character-list'>
      <p className='character-list__title'>Most recent characters</p>
      <div className='character-list__content'>
        {characters.map((character, idx) =>
          <CharacterCard key={idx} character={character} />
        )}
      </div>
    </div>
  )
}

export default CharacterList
