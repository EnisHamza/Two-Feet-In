import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import AppHeader from "../components/AppHeader";

function Homepage() {
  return (
    <div>
      <Header />
      <AppHeader />
      <h1 className="test">Two Feet In</h1>
      <Link to="/app">Link to App</Link>
    </div>
  );
}

export default Homepage;
