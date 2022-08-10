import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/ErrorPage";

import MainScreen from "./pages/MainScreen";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import LectureRoom from "./pages/LectureRoom";
import Register from "./pages/Register";

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
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
