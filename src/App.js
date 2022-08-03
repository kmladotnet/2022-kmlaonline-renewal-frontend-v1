import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import PageNotFound from "./pages/ErrorPage";

import MainScreen from "./pages/MainScreen";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import LectureRoom from "./pages/LectureRoom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<MainScreen />}/>
      <Route path="/user/:id" element = {<UserPage />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/lectureroom" element = {<LectureRoom />} />
      <Route path="/forum" element = {<LectureRoom />} />
      <Route element={PageNotFound} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
