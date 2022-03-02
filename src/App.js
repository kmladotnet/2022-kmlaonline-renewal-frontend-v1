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
import LectureRoom from './pages/LectureRoom';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/user/id" component = {UserPage} />
          <Route exact path="/login" component = {Login} /> {/* Only For test purpose, Need to be nodified; binded with Auth method*/}
          <Route exact path="/" component = {MainScreen} />
          <Route exact path="/lectureroom" component = {LectureRoom} />
          <Route exact path="/announcements" component = {LectureRoom} />
          <Route exact path="/forum" component = {LectureRoom} />
          <Route exact path="/counsil" component = {LectureRoom} />
          <Route exact path="/legislative" component = {LectureRoom} />
          <Route exact path="/judicial" component = {LectureRoom} />
          <Route exact path="/executive" component = {LectureRoom} />
          <Route component = {PageNotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
