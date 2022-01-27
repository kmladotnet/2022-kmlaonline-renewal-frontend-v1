import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainScreen from './pages/MainScreen';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/user/id" exact>
            <Profile />
          </Route>
          <Route path="" exact>
            <MainScreen />
          </Route>
          <Redirect to="" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
