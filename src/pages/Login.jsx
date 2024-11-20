import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import styles from "../style/Login.module.css";

import React from "react";

function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className={styles.login}>
      <Header />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <h3>
          Don't have an account?
          <a href="/">Register</a>
          {""}
        </h3>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
