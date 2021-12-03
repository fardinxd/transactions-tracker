import React from "react";

// Styles \\
import styles from "./Home.module.scss";

// Components \\
import TransactionForm from "../../components/TransactionForm/TransactionForm";

const Home = () => {
  // JSX \\
  return (
    <main className={`container ${styles.home}`}>
      <TransactionForm />
    </main>
  );
};

export default Home;
