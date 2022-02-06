import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import SearchInput from '../ui/SearchInput'
import { useLocation, Link } from 'react-router-dom'

const Navbar = ({ children }) => {
  const pageName = useLocation().pathname.split('/')[1]

  console.log('<Navbar>', pageName)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='secondary'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link to='/'>
                Rick and Morty App
              </Link>
            </Typography>
            {pageName !== '' && <SearchInput pageName={pageName} placeholder={`Search ${pageName} ...`} />}
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  )
}

export default Navbar
