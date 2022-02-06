import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startGettingEpisodeData } from '../../actions/episode.action'
import CustomPagination from '../ui/CustomPagination'
import EpisodeList from './EpisodeList'

const EpisodeScreen = () => {
  console.log('<EpisodeScreen />')
  const { name = '' } = useParams()
  const dispatch = useDispatch()

  // selectors
  const { episodeList, info } = useSelector(state => state.episode)
  const { currentPage } = useSelector(state => state.pagination)

  useEffect(() => {
    dispatch(startGettingEpisodeData({ page: currentPage, name }, true))
  }, [dispatch, name, currentPage])

  return (
    <div>
      <EpisodeList episodes={episodeList} title={name === '' ? `Episodes (${info.count})` : `Results for "${name}" (${info.count})`} />
      {info.pages > 1 && <CustomPagination totalPages={info.pages} />}
    </div>
  )
}

export default EpisodeScreen
