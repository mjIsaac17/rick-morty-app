import { Box, Card, CardContent, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { successGetEpisode } from '../../actions/episode.action'

const EpisodeCard = ({ episode }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSelectEpisode = () => {
    // set current episode
    dispatch(successGetEpisode(episode))
    history.push(`/episode/info/${episode.name}`)
  }

  return (
    <Card className='character-card' onClick={handleSelectEpisode}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='p' variant='subtitle2'>
            # {episode.id}
          </Typography>
          <Typography component='div' variant='h5'>
            {episode.name}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            Air date: {episode.air_date}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            Episode: {episode.episode}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default EpisodeCard
