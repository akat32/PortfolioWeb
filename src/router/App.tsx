import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { HeaderNavigation } from "./navigation/header";
import { Home, Portfolio, Resume } from "../component";
import { RedirectLink } from "./Redirect/index";
import { DeviceProvider } from "../context/DeviceContext";
import { ProjectProvider } from "../context/ProjectContext";

import DeviceOrientation, { Orientation } from "react-screen-orientation";
const App: React.FC = () => {
  const fsc = document.documentElement as HTMLElement & {
    // 오픈
    mozRequestFullscreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;
  };
  const doc = document as Document & {
    // 클로즈
    mozCancelFullScreen(): Promise<void>;
    webkitExitFullscreen(): Promise<void>;
    msExitFullscreen(): Promise<void>;
  };
  function openFullScreenMode() {
    if (fsc.requestFullscreen) {
      fsc.requestFullscreen();
    } else if (fsc.webkitRequestFullscreen) {
      fsc.webkitRequestFullscreen();
    } else if (fsc.mozRequestFullscreen) {
      fsc.mozRequestFullscreen();
    } else if (fsc.msRequestFullscreen) {
      fsc.msRequestFullscreen();
    }
  }
  function isMobile() {
    var filter = "win16|win32|win64|mac";
    if (navigator.platform) {
      if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    }
  }
  useEffect(() => {
    if (isMobile()) openFullScreenMode();
  }, []);
  return (
    <Router>
      <DeviceProvider>
        <ProjectProvider>
          <HeaderNavigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Portfolio/">
              <Portfolio />
            </Route>
            <Route exact path="/Resume">
              <Resume />
            </Route>
            <Route path="/">
              <RedirectLink />
            </Route>
          </Switch>
        </ProjectProvider>
      </DeviceProvider>
    </Router>
  );
};

export default App;
