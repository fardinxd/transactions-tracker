import { useState, useEffect, useRef } from "react";

// Firebase Firestore \\
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
  // States \\
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // If We Don't Use a Ref === Infinite Loop In useEffect \\
  // _query & _orderBy Is An Array & Is 'DIFFERENT' On Every Function Call \\
  let query = useRef(_query).current;
  let orderBy = useRef(_orderBy).current;

  useEffect(() => {
    // Collection Reference \\
    let reference = projectFirestore.collection(collection);
    if (query) reference = reference.where(...query);
    if (orderBy) reference = reference.orderBy(...orderBy);

    // Get Collection From Firebase \\
    const unsubscribe = reference.onSnapshot(
      (snapshot) => {
        let document = [];
        snapshot.docs.forEach((d) => document.push({ ...d.data(), id: d.id }));
        setDocuments(document);
        setError(null);
      },
      () => {
        setError("Could not fetch the data");
      }
    );

    // Unsubscribe On Component Unmount \\
    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return { documents, error };
};
