import React from "react";
import Header from "../components/Header";
import styles from "../style/AboutUs.module.css";

function AboutUs() {
  return (
    <main className={styles.product}>
      <Header />

      <section>
        <img src="map.png" alt="map" />
        <div>
          <h2>
            About <span>Two Feet In.</span>
          </h2>
          <p>
            At Two Feet In, we believe that every step you take on your travels
            tells a unique story. Whether you're exploring bustling cities or
            quiet corners of the world, your journey deserves to be remembered.
            That's why we’ve created a world map designed to track your
            adventures and the places you’ve wandered, one footstep at a time.
          </p>
          <p>
            Join us in celebrating the joy of discovery, one step at a time.
            Keep track, relive the memories, and inspire others with the places
            you've been and the paths you’ve walked.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
