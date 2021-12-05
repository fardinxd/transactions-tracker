import { useReducer } from "react";

// Firebase Firestore & Timestamp \\
import { projectFirestore, timestamp } from "../firebase/config";

// Initial State \\
const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

// Firestore Reducer Function \\
const firestoreReducer = (state, action) => {
  if (action.type === "ADDED_DOCUMENT") {
    return {
      document: action.payload,
      isPending: false,
      error: null,
      success: true,
    };
  }

  if (action.type === "DELETED_DOCUMENT") {
    return {
      document: null,
      isPending: false,
      error: null,
      success: true,
    };
  }

  if (action.type === "IS_PENDING") {
    return {
      document: null,
      isPending: true,
      error: null,
      success: false,
    };
  }

  if (action.payload === "ERROR") {
    return {
      document: null,
      isPending: false,
      error: action.payload,
      success: false,
    };
  }

  return state;
};

export const useFirestore = (collection) => {
  // Reducer \\
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  // Collection Reference \\
  const reference = projectFirestore.collection(collection);

  // Add a Document to Firebase Collection \\
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await reference.add({ ...doc, createdAt });
      dispatch({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  // Delete a Document from Firebase Collection \\
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      await reference.doc(id).delete();
      dispatch({
        type: "DELETED_DOCUMENT",
      });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Could not delete" });
    }
  };

  return { response, addDocument, deleteDocument };
};
