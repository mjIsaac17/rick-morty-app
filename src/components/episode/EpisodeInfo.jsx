import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { startGettingEpisodeData } from '../../actions/episode.action'

const EpisodeInfo = () => {
  // Get character name in the url, to use it if there is no selected chr. in the state
  const { name } = useParams()
  const dispatch = useDispatch()

  const { selectedEpisode: episode } = useSelector(state => state.episode)

  useEffect(() => {
    if (!episode) {
      dispatch(startGettingEpisodeData({ name }))
    }
  }, [dispatch, name])

  return (
    <>
      {episode
        ? (
          <div className='character-profile'>
            <div className='character-profile__header'>
              <p>#{episode.id} {episode.name}</p>
            </div>
            <div className='character-profile__body'>
              <div className='character-profile__body__info'>
                <h3>Details:</h3>
                <hr />
                <p>Episode: {episode.episode}</p>
                <p>Air date: {episode.air_date}</p>
                {/* <br />
                <p>Type: {episode.type}</p>
                <p>Species: {episode.species}</p>
                <br />
                <p>Origin: {episode.origin.name}</p>
                <p>Location: {episode.location.name}</p> */}
              </div>
            </div>
          </div>)
        : <p>Loading...</p>}
    </>
  )
}

export default EpisodeInfo
