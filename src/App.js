// import HomeScreen from './components/home/HomeScreen'
import Navbar from './components/navbar/Navbar'
import { CustomSnackbar } from './components/ui/CustomSnackbar'
import AppRouter from './router/AppRouter'

function App () {
  return (
    <div className='App'>
      <CustomSnackbar />
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
