import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "antd/dist/antd.css";
import Login from "./Pages/Auth/Login";
import PrivateWrapper from "./Components/Auth/PrivateWrapper";
import RedirectWrapper from "./Components/Auth/RedirectWrapper";
import NotFoundPage from "./Components/404/NotFoundPage";

interface IApp {}
const App: FC<IApp> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/login"
          element={
            <RedirectWrapper>
              <Login />
            </RedirectWrapper>
          }
        />

        <Route
          path="/"
          element={
            <PrivateWrapper>
              <Home />
            </PrivateWrapper>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
