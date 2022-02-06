import { Link, useHistory } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import ListItemIcon from '@mui/material/ListItemIcon'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import HomeIcon from '@mui/icons-material/Home'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../actions/pagination.action'

const Sidebar = ({ isOpen, handleToogleSidebar }) => {
  console.log('<Sidebar>')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleNavigate = (path) => {
    dispatch(setCurrentPage(1))
    history.push(path)
  }

  return (
    <>
      <Drawer open={isOpen} onClose={handleToogleSidebar}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={handleToogleSidebar}
          onKeyDown={handleToogleSidebar}
        >
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant='h5'>Rick and Morty App</Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            <Link to='/'>
              <ListItem button>
                <ListItemIcon><HomeIcon /> </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </Link>
            <div onClick={() => handleNavigate('/character')}>
              <ListItem button>
                <ListItemIcon><PeopleAltIcon /> </ListItemIcon>
                <ListItemText primary='Characters' />
              </ListItem>
            </div>
            <div onClick={() => handleNavigate('/episode')}>
              <ListItem button>
                <ListItemIcon><LiveTvIcon /> </ListItemIcon>
                <ListItemText primary='Episodes' />
              </ListItem>
            </div>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
