import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.scss'
import { HeaderNavigation } from './navigation/header'
import { Home, Portfolio } from '../component'
import { RedirectLink } from './Redirect/index'
const App: React.FC = () => {
  return (
    <Router>
      <>
        <HeaderNavigation />
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path = '/Portfolio/'>
            <Portfolio />
          </Route>
          <Route path ='/'>
            <RedirectLink/>
          </Route>
        </Switch>
      </>
    </Router>  
  );
}

export default App;
