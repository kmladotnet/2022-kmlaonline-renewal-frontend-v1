import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainScreen from './pages/MainScreen';
import UserPage from './components/UserProfile/UserPage'

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/user/id" exact>
            <UserPage />
          </Route>
          <Route path="/" exact>
            <MainScreen />
          </Route>
          <Redirect to="" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
