import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Styles \\
import "./App.scss";

// Pages \\
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import FourZeroFour from "./pages/FourZeroFour/FourZeroFour";

const App = () => {
  // JSX \\
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<FourZeroFour />} />
      </Routes>
    </Fragment>
  );
};

export default App;
