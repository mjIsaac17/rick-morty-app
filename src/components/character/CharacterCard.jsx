import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

const CharacterCard = ({ character }) => {
  return (
    <Card className='character-card'>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='p' variant='subtitle2'>
            # {character.id}
          </Typography>
          <Typography component='div' variant='h5'>
            {character.name}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            Gender: {character.gender}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            Status: {character.status}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        className='character-card__image'
        component='img'
        image={character.image}
        alt={character.name}
      />
    </Card>
  )
}

export default CharacterCard
