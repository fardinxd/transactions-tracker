import { projectAuth } from "../firebase/config";

// Firebase Auth \\
import { useAuthContext } from "./useAuthContext";

export const useSignout = () => {
  // Auth Context \\
  const { dispatch } = useAuthContext();

  // Signout Function \\
  const signout = async () => {
    // Sign The User Out \\
    projectAuth.signOut();

    // Dispatch Logout Action \\
    dispatch({ type: "SIGNOUT" });
  };

  return { signout };
};
