import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles \\
import styles from "./Signin.module.scss";

// Custom Hooks \\
import { useSignin } from "../../hooks/useSignin";

const Signin = () => {
  // States \\
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signin Hook \\
  const { isPending, error, signin } = useSignin();

  // On Signin Form Submit \\
  const submitHandler = (event) => {
    event.preventDefault();
    signin(email, password);
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

        <button className="btn">{!isPending ? "Signin" : "Loading..."}</button>

        {error && <p className="error">{error}</p>}
      </form>

      <p className={styles.paragraph}>
        New to Transactions Tracker? <Link to="/signup">Signup</Link>
      </p>
    </main>
  );
};

export default Signin;
