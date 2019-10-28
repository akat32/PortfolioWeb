import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.scss'
import { HeaderNavigation } from './navigation/header'
import { Home, Portfolio } from '../component'
import { RedirectLink } from './Redirect/index'
import { DeviceProvider } from '../context/DeviceContext'
import { ProjectProvider } from '../context/ProjectContext'
const App: React.FC = () => {
  return (
    <Router>
      <DeviceProvider>
        <ProjectProvider>
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
        </ProjectProvider>
      </DeviceProvider>
    </Router>  
  );
}

export default App;
