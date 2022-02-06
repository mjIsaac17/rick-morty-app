import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import CharacterProfile from '../components/character/CharacterProfile'
import CharactersScreen from '../components/character/CharactersScreen'
import HomeScreen from '../components/home/HomeScreen'
import Navbar from '../components/navbar/Navbar'
import FabReturn from '../components/ui/FabReturn'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar>
          <FabReturn />
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/character/:name?' component={CharactersScreen} />
            {/* <Route exact path='/episode/:name?' component={EpisodeS} /> */}
            <Route exact path='/character/profile/:name' component={CharacterProfile} />
            <Redirect to='/' />
          </Switch>
        </Navbar>
      </Router>
    </>
  )
}

export default AppRouter
