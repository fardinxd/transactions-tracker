import { useState } from "react";

// Firebase Auth \\
import { projectAuth } from "../firebase/config";

// Custom Hooks \
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  // States \\
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Auth Context \\
  const { dispatch } = useAuthContext();

  // Signup Function \\
  const signup = async (displayName, email, password) => {
    setIsPending(true);
    setError(null);

    try {
      // Signup The User \\
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Error Handling \\
      if (!response) throw new Error("Could not complete signup");

      // Add Display Name To User \\
      await response.user.updateProfile({ displayName });

      // Dispatch Signup Action \\
      dispatch({ type: "SIGNUP", payload: response.user });

      setIsPending(false);
      setError(null);
    } catch (error) {
      setIsPending(false);
      setError(error.message);
    }
  };

  return { isPending, error, signup };
};
