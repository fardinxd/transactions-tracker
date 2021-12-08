import React, { useState, useEffect } from "react";

// Styles and Icons \\
import styles from "./TransactionForm.module.scss";
import { HiPlus } from "react-icons/hi";

// Custom Hooks \\
import { useFirestore } from "../../hooks/useFirestore";

// Components \\
import Modal from "./Modal";

const TransactionForm = ({ uid }) => {
  // States \\
  const [showModal, setShowModal] = useState(false);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  // useFirestore Hook \\
  const { response, addDocument } = useFirestore("transactions");

  // On Transaction Form Submit \\
  const submitHandler = (event) => {
    event.preventDefault();

    // Form Validation \\
    if (transactionName.trim().length < 3 || +transactionAmount < 1) {
      alert("Transaction name or amount is invalid");
      return;
    }

    // Add Transaction To Firebase Transactions Collection \\
    addDocument({ uid, name: transactionName, amount: transactionAmount });
  };

  // Reset Form Fields & Close Modal If Transaction Successfully Added To Transaction List \\
  useEffect(() => {
    if (response.success) {
      setTransactionName("");
      setTransactionAmount("");
      setShowModal(false);
      window.scroll(0, 0);
    }
  }, [response.success]);

  // JSX \\
  return (
    <div className={styles.transaction}>
      <div
        className={styles.transaction_btn}
        onClick={() => setShowModal(true)}
      >
        <span>Add New Transaction</span>
        <HiPlus />
      </div>

      {showModal && (
        <Modal setShowModal={setShowModal}>
          <form className={styles.transaction_form} onSubmit={submitHandler}>
            <h1 className={styles.transaction_form_heading}>
              Add a Transaction
            </h1>

            <div className={styles.transaction_form_field}>
              <label htmlFor="transaction-name">Transaction Name</label>
              <input
                id="transaction-name"
                type="text"
                onChange={(e) => setTransactionName(e.target.value)}
                value={transactionName}
                required
              />
            </div>

            <div className={styles.transaction_form_field}>
              <label htmlFor="transaction-amount">Transaction Amount ($)</label>
              <input
                id="transaction-amount"
                type="number"
                onChange={(e) => setTransactionAmount(e.target.value)}
                value={transactionAmount}
                required
              />
            </div>

            <div className={styles.transaction_form_actions}>
              <div className="btn" onClick={() => setShowModal(false)}>
                Cancel
              </div>

              <button className="btn" type="submit">
                {!response.isPending ? "Add" : "Adding..."}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default TransactionForm;
