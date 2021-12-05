import React from "react";

// Styles \\
import styles from "./Home.module.scss";

// Components \\
import TransactionList from "../../components/TransactionList/TransactionList";
import TransactionForm from "../../components/TransactionForm/TransactionForm";

// Custom Hooks \\
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

const Home = () => {
  // Auth Context \\
  const { currentUser } = useAuthContext();

  // Getting 'Transactions' Collection Form Firebase Firestore Using useCollection Hook \\
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", currentUser.uid],
    ["createdAt", "desc"]
  );

  // JSX \\
  return (
    <main className={`container ${styles.home}`}>
      {documents && !error && <TransactionList transactions={documents} />}
      {error && <div className="error">{error}</div>}
      <TransactionForm uid={currentUser.uid} />
    </main>
  );
};

export default Home;
