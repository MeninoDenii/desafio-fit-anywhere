import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ListTasks,
  UsersInfo,
} from "../pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="list-tasks" element={<ListTasks />} />
      <Route path="users-info" element={<UsersInfo />} />
    </Routes>
  );
};

export default Router;
