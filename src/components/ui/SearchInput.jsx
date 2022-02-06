import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { useHistory } from 'react-router-dom'

const SearchInput = ({ placeholder = 'Search ...', pageName }) => {
  console.log('<SearchInput>')

  const history = useHistory()

  const handleSearch = () => {
    const searchValue = document.getElementById('searchInput').value.trim()
    if (searchValue !== '') history.push(`/${pageName}/${searchValue}`)
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10

  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`
    }
  }))
  return (
    <Search>
      <SearchIconWrapper onClick={handleSearch}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        id='searchInput'
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchInput
