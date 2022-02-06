import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import CharacterProfile from '../components/character/CharacterProfile'
import CharactersScreen from '../components/character/CharactersScreen'
import EpisodeInfo from '../components/episode/EpisodeInfo'
import EpisodeScreen from '../components/episode/EpisodeScreen'
import HomeScreen from '../components/home/HomeScreen'
import Layout from '../components/layout/Layout'
import FabReturn from '../components/ui/FabReturn'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Layout>
          <FabReturn />
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/character/:name?' component={CharactersScreen} />
            <Route exact path='/character/profile/:name' component={CharacterProfile} />
            <Route exact path='/episode/:name?' component={EpisodeScreen} />
            <Route exact path='/episode/info/:name' component={EpisodeInfo} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      </Router>
    </>
  )
}

export default AppRouter
