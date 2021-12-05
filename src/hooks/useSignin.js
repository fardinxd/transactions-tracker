import { useState, useEffect } from "react";

// Firebase Auth \\
import { projectAuth } from "../firebase/config";

// Custom Hooks \\
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
  // States \\
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Auth Context \\
  const { dispatch } = useAuthContext();

  // Signin Function \\
  const signin = async (email, password) => {
    setIsPending(true);
    setError(null);

    try {
      // Signin The User \\
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );

      // Error Handling \\
      if (!response) throw new Error("Could not complete signup");

      // Dispatch Signin Action \\
      dispatch({ type: "SIGNIN", payload: response.user });

      setIsPending(false);
      setError(null);
    } catch (error) {
      setIsPending(false);
      setError(error.message);
    }
  };

  return { isPending, error, signin };
};
