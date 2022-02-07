import EpisodeCard from './EpisodeCard'
import '../character/character.css'

const EpisodeList = ({ episodes, title = 'Episodes' }) => {
  return (
    <div className='character-list'>
      <p className='character-list__title'>{title}</p>
      <div className='character-list__content'>
        {episodes.map((episode, idx) =>
          <EpisodeCard key={idx} episode={episode} />
        )}
      </div>
    </div>
  )
}

export default EpisodeList
