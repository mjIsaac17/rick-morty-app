import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../actions/pagination.action'

const CustomPagination = ({ totalPages }) => {
  const { currentPage } = useSelector(state => state.pagination)

  const [page, setPage] = useState(currentPage)
  const dispatch = useDispatch()

  const handleChange = (event, value) => {
    window.scrollTo(0, 0)
    dispatch(setCurrentPage(value))
    setPage(value)
  }

  return (
    <Stack spacing={2} margin={2}>
      <Pagination
        count={totalPages}
        color='secondary'
        onChange={handleChange}
        page={page}
        sx={{ margin: '0 auto' }}
      />
    </Stack>
  )
}

export default CustomPagination
