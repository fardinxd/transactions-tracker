import React from "react";

// Styles \\
import styles from "./Home.module.scss";

// Components \\
import TransactionForm from "../../components/TransactionForm/TransactionForm";

// Custom Hooks \\
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  // Auth Context \\
  const { currentUser } = useAuthContext();

  // JSX \\
  return (
    <main className={`container ${styles.home}`}>
      <TransactionForm uid={currentUser.uid} />
    </main>
  );
};

export default Home;
