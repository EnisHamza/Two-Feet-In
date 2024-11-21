import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Logo from "./Logo";
import styles from "../style/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppHeader />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Two Feet In.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
