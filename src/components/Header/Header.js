import React from "react";
import { Link } from "react-router-dom";

// Styles & Icons \\
import styles from "./Header.module.scss";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Header = () => {
  // JSX \\
  return (
    <header>
      <nav className="container">
        <Link to="/" className={styles.logo}>
          <RiMoneyDollarCircleFill />
        </Link>

        <ul className={styles.nav_list}>
          <li className={styles.nav_list_item}>
            <Link to="/signin">Signin</Link>
          </li>

          <li className={styles.nav_list_item}>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
