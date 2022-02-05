import HomeScreen from './components/home/HomeScreen'
import Navbar from './components/navbar/Navbar'
import { CustomSnackbar } from './components/ui/CustomSnackbar'

function App () {
  return (
    <div className='App'>
      <CustomSnackbar />
      <Navbar />
      <HomeScreen />
    </div>
  )
}

export default App
