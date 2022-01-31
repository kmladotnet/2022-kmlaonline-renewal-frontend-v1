import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import PageNotFound from './pages/ErrorPage';

import MainScreen from './pages/MainScreen';
import UserPage from './pages/UserPage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/user/id" component = {UserPage} />
          <Route exact path="/login" component = {Login} /> {/* Only For test purpose, Need to be nodified; binded with Auth method*/}
          <Route exact path="/" component = {MainScreen} />
          <Route component = {PageNotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
