import React from "react";
import { Link } from "react-router-dom";

// Styles & Icons \\
import styles from "./Header.module.scss";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineModeNight } from "react-icons/md";
import { FiSun } from "react-icons/fi";

// Custom Hooks \\
import useDarkMode from "../../hooks/useDarkMode";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useSignout } from "../../hooks/useSignout";

const Header = () => {
  // Auth Context \\
  const { currentUser } = useAuthContext();

  // Signout Hook \\
  const { signout } = useSignout();

  // Dark Mode Hook \\
  const [darkMode, setDarkMode] = useDarkMode();

  // JSX \\
  return (
    <header>
      <nav className="container">
        <Link to="/" className={styles.logo}>
          <RiMoneyDollarCircleFill />
        </Link>

        <ul className={styles.nav_list}>
          {!currentUser && (
            <React.Fragment>
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
            </React.Fragment>
          )}

          {currentUser && (
            <React.Fragment>
              <li className={styles.nav_list_item}>
                <p className={styles.nav_list_item_username}>
                  <span>Hi,</span>
                  {currentUser.displayName}
                </p>
              </li>

              <li className={styles.nav_list_item} onClick={signout}>
                <p className="btn">Signout</p>
              </li>
            </React.Fragment>
          )}

          <li
            className={styles.nav_list_item}
            onClick={() => setDarkMode((previousMode) => !previousMode)}
          >
            <div className={`${styles.mode} btn`}>
              {darkMode ? <FiSun /> : <MdOutlineModeNight />}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
