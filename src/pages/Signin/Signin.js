import React, { useState } from "react";

// Styles \\
import styles from "./Signin.module.scss";

const Signin = () => {
  // States \\
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // On Form Submit \\
  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  // JSX \\
  return (
    <main className="container">
      <h1 className={styles.heading}>SIGNIN</h1>

      <form className={styles.signin_form} onSubmit={submitHandler}>
        <div className={styles.signin_form_field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={styles.signin_form_field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button>Signin</button>
      </form>
    </main>
  );
};

export default Signin;
