import React from "react";

// Styles & Icons \\
import styles from "./TransactionList.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

// Custom Hooks \\
import { useFirestore } from "../../hooks/useFirestore";

const TransactionList = ({ transactions }) => {
  // Delete Transaction With useFirestore Hook \\
  const { deleteDocument } = useFirestore("transactions");

  // Number To Currency Formatter \\
  const numberToCurrency = (number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(Number(number));
  };

  // Seconds To Date & Time Formatter \\
  const dateAndTime = (seconds) => {
    // prettier-ignore
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let date = new Date(seconds * 1000).getDate(),
      monthIndex = new Date(seconds * 1000).getMonth(),
      year = new Date(seconds * 1000).getFullYear(),
      hours = new Date(seconds * 1000).getHours(),
      minutes = new Date(seconds * 1000).getMinutes();

    if (String(minutes).length === 1) minutes = `0${minutes}`;
    if (String(hours).length === 1) hours = `0${hours}`;

    return (
      <React.Fragment>
        <span>
          {date}-{monthNames[monthIndex]}-{year}
        </span>

        <span>
          {hours}:{minutes}
        </span>
      </React.Fragment>
    );
  };

  // JSX \\
  return (
    <React.Fragment>
      <h1>
        {transactions.length === 0
          ? "You Don't Have Any Transactions"
          : "Your Transactions"}
      </h1>

      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li className={styles.transactions_item} key={transaction.id}>
            <div className={styles.transactions_item_info}>
              <h2>{transaction.name}</h2>
              <h3>{numberToCurrency(transaction.amount)}</h3>
            </div>

            <div className={styles.transactions_item_date}>
              {dateAndTime(transaction.createdAt.seconds)}
            </div>

            <div
              className={styles.transactions_item_delete}
              onClick={() => deleteDocument(transaction.id)}
            >
              <RiDeleteBin5Line />
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TransactionList;
