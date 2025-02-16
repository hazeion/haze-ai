import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import HomePage from "./routes/homepage/Homepage.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
// import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
// import SignInPage from './routes/signInPage/SignInPage.jsx'
// import SignUpPage from './routes/signUpPage/SignUpPage.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/chats/:id" element={<ChatPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
