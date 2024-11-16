import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../style/Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <Header />

      <section>
        <h1>
          You travel the world.
          <br />
          <span>Two Feet In</span> keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you could put
          your two feet in. Never forget your wonderful experiences, and show
          your friends how you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
