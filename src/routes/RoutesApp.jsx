import { Routes, Route } from "react-router-dom";
import React from "react";

import HomeAdmin from "../pages/HomeAdmin";

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/homeAdmin" element={<HomeAdmin />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
