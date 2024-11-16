import { Link } from "react-router-dom";
import styles from "../style/Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo4.png" alt="Two Feet In logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
