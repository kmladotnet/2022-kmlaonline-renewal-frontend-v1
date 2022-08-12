import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/ErrorPage/ErrorPage";

import MainScreen from "./pages/MainScreen/MainScreen";
import UserPage from "./pages/UserPage/UserPage";
import Login from "./pages/Login/Login";
import LectureRoom from "./pages/LectureRoom/LectureRoom";
import Register from "./pages/Register/Register";
import PostList from './pages/PostList/PostList';

function App() {
  const localToken = localStorage.getItem("account");
  const sessionToken = sessionStorage.getItem("account");
  if (!localToken && !sessionToken) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/lectureroom" element={<LectureRoom />} />
        <Route path="/forum" element={<LectureRoom />} />
        <Route path="/announcements/:page" element={<PostList type = "announcements" />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
