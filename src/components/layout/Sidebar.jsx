import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import { Typography } from '@mui/material'

const Sidebar = ({ isOpen, handleToogleSidebar }) => {
  console.log('<Sidebar>')

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
            <Link to='/character'>
              <ListItem button>
                <ListItemIcon><PeopleAltIcon /> </ListItemIcon>
                <ListItemText primary='Characters' />
              </ListItem>
            </Link>
            <Link to='/episode'>
              <ListItem button>
                <ListItemIcon><LiveTvIcon /> </ListItemIcon>
                <ListItemText primary='Episodes' />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
