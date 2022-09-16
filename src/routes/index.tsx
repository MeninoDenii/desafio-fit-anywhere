import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
