import React from "react";
import styles from "../style/Layout.module.css";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function Layout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default Layout;
