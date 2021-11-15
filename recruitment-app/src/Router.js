import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { APP } from "./constants/index";

// Code splitting using React.lazy
const MainContainer = React.lazy(() =>
  import("./components/containers/MainContainer")
);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path={APP.ROUTES.LANDING} element={<MainContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
