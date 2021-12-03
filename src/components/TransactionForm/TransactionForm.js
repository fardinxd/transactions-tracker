import React, { useState } from "react";

// Styles and Icons \\
import styles from "./TransactionForm.module.scss";
import { HiPlus } from "react-icons/hi";

// Components \\
import Modal from "./Modal";

const TransactionForm = () => {
  // States \\
  const [show, setShow] = useState(false);
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  // On Form Submit \\
  const submitHandler = (event) => {
    event.preventDefault();

    // Reset Form Fields \\
    setTransactionName("");
    setTransactionAmount("");
    setShow(false);
  };

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
                Add
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default TransactionForm;
