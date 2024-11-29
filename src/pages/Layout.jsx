import React from "react";
import styles from "../style/Layout.module.css";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

function Layout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default Layout;
