import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Styles \\
import "./App.scss";

// Custom Hooks \\
import { useAuthContext } from "./hooks/useAuthContext";

// Pages \\
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import FourZeroFour from "./pages/FourZeroFour/FourZeroFour";

// Components \\
import Header from "./components/Header/Header";

const App = () => {
  // Auth Context \\
  const { currentUser, authIsReady } = useAuthContext();

  // JSX \\
  return (
    <Fragment>
      {authIsReady && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/signin"
              element={!currentUser ? <Signin /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!currentUser ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/"
              element={currentUser ? <Home /> : <Navigate to="/signin" />}
            />
            <Route
              path="/*"
              element={currentUser ? <FourZeroFour /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </Fragment>
  );
};

export default App;
