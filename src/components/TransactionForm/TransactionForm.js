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
  const [show, setShow] = useState(false);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  // useFirestore Hook \\
  const { response, addDocument } = useFirestore("transactions");

  // On Transaction Form Submit \\
  const submitHandler = (event) => {
    event.preventDefault();

    // Form Validation \\
    if (transactionName.trim().length < 3) {
      alert("Transaction name should be atleast 3 characters long");
      return;
    }

    if (+transactionAmount < 1) {
      alert("Transaction amount should be grater than 0");
      return;
    }

    // Add Transaction To Firebase Transactions Collection \\
    addDocument({ uid, transactionName, transactionAmount });
  };

  // Reset Form Fields & Close Modal If Transaction Successfully Added \\
  useEffect(() => {
    if (response.success) {
      setTransactionName("");
      setTransactionAmount("");
      setShow(false);
    }
  }, [response.success]);

  // JSX \\
  return (
    <div className={styles.transaction_form_container}>
      <div className={styles.btn} onClick={() => setShow(true)}>
        <span>Add New Transaction</span>
        <HiPlus />
      </div>

      {show && (
        <Modal setShow={setShow}>
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
              <label htmlFor="transaction-amount">Transaction Amount</label>
              <input
                id="transaction-amount"
                type="number"
                onChange={(e) => setTransactionAmount(e.target.value)}
                value={transactionAmount}
                required
              />
            </div>

            <div className={styles.transaction_form_actions}>
              <div className="btn" onClick={() => setShow(false)}>
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
