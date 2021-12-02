import React from "react";
import { Link } from "react-router-dom";

// Styles & Icons \\
import styles from "./Header.module.scss";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

// Custom Hooks \\
import { useAuthContext } from "../../hooks/useAuthContext";
import { useSignout } from "../../hooks/useSignout";

const Header = () => {
  // Auth Context \\
  const { currentUser } = useAuthContext();

  // Signout Hook \\
  const { signout } = useSignout();

  // JSX \\
  return (
    <header>
      <nav className="container">
        <Link to="/" className={styles.logo}>
          <RiMoneyDollarCircleFill />
        </Link>

        {!currentUser && (
          <ul className={styles.nav_list}>
            <li className={styles.nav_list_item}>
              <Link to="/signin" className="btn">
                Signin
              </Link>
            </li>

            <li className={styles.nav_list_item}>
              <Link to="/signup" className="btn">
                Signup
              </Link>
            </li>
          </ul>
        )}

        {currentUser && (
          <ul className={styles.nav_list}>
            <li className={styles.nav_list_item}>
              <p className={styles.nav_list_item_name}>
                <span>Hey,</span>
                {currentUser.displayName}
              </p>
            </li>

            <li className={styles.nav_list_item} onClick={signout}>
              <p className="btn">Signout</p>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
