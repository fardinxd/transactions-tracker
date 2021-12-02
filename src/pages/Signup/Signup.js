import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles \\
import styles from "./Signup.module.scss";

// Custom Hooks \\
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  // States \\
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup Hook \\
  const { isPending, error, signup } = useSignup();

  // On Signup Form Submit \\
  const submitHandler = (event) => {
    event.preventDefault();
    signup(displayName, email, password);
  };

  // JSX \\
  return (
    <main className="container">
      <h1 className={styles.heading}>SIGNUP</h1>

      <form className={styles.signup_form} onSubmit={submitHandler}>
        <div className={styles.signup_form_field}>
          <label htmlFor="display-name">DIsplay Name</label>
          <input
            id="display-name"
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
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

        <button className="btn">{!isPending ? "Signup" : "Loading..."}</button>

        {error && <p className="error">{error}</p>}
      </form>

      <p className={styles.paragraph}>
        Already Have an Account? <Link to="/signin">Signin</Link>
      </p>
    </main>
  );
};

export default Signup;
