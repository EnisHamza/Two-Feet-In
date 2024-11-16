import React from "react";
import AppHeader from "../components/AppHeader";
import styles from "../style/Layout.module.css";

function Layout() {
  return (
    <div className={styles.nav}>
      <AppHeader />
    </div>
  );
}

export default Layout;
