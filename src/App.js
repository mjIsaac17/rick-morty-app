// import HomeScreen from './components/home/HomeScreen'
import { CustomSnackbar } from './components/ui/CustomSnackbar'
import AppRouter from './router/AppRouter'

function App () {
  return (
    <div className='App'>
      <CustomSnackbar />
      <AppRouter />
    </div>
  )
}

export default App
