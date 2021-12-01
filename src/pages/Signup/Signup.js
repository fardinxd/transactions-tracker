import React, { useState } from "react";

// Styles \\
import styles from "./Signup.module.scss";

const Signup = () => {
  // States \\
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // On Form Submit \\
  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  // JSX \\
  return (
    <main className="container">
      <h1 className={styles.heading}>SIGNUP</h1>

      <form className={styles.signup_form} onSubmit={submitHandler}>
        <div className={styles.signup_form_field}>
          <label htmlFor="name">DIsplay Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className={styles.signup_form_field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={styles.signup_form_field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button>Signup</button>
      </form>
    </main>
  );
};

export default Signup;
