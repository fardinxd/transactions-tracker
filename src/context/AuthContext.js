import React, { createContext, useReducer, useEffect } from "react";

// Firebase Auth \\
import { projectAuth } from "../firebase/config";

// Auth Context \\
export const AuthContext = createContext();

// Initial State \\
const initialState = { currentUser: null, authIsReady: false };

// Auth Reducer Function \\
const authReducer = (state, action) => {
  if (action.type === "SIGNIN") {
    return { ...state, currentUser: action.payload };
  }

  if (action.type === "SIGNUP") {
    return { ...state, currentUser: action.payload };
  }

  if (action.type === "SIGNOUT") {
    return { ...state, currentUser: null };
  }

  if (action.type === "AUTH_IS_READY") {
    return { ...state, currentUser: action.payload, authIsReady: true };
  }

  return state;
};

// Auth Context Provider \\
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((currentUser) =>
      dispatch({ type: "AUTH_IS_READY", payload: currentUser })
    );

    return () => unsubscribe();
  }, []);

  const authState = {
    currentUser: state.currentUser,
    authIsReady: state.authIsReady,
    dispatch,
  };

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
