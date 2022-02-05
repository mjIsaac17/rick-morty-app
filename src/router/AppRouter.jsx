import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import CharacterProfile from '../components/character/CharacterProfile'
import CharactersScreen from '../components/character/CharactersScreen'
import HomeScreen from '../components/home/HomeScreen'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/character/:name?' component={CharactersScreen} />
        <Route path='/character/profile/:name' component={CharacterProfile} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default AppRouter
