import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'
import ArrowBack from '@mui/icons-material/ArrowBack'
import { useHistory } from 'react-router-dom'

const FabReturn = () => {
  const history = useHistory()
  return (
    <Tooltip title='Previous page'>
      <Fab
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          left: (theme) => theme.spacing(2)
        }}
        color='secondary'
        aria-label='return'
        onClick={() => history.goBack()}
      >
        <ArrowBack />
      </Fab>
    </Tooltip>
  )
}

export default FabReturn
