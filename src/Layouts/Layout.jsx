import React from "react";
import styles from "./Layout.module.css";


function Layout({ children }) {

  return (
    <div>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://www.instagram.com/fatemehbazgir.js?igsh=M2tkcXcwYWhnd2R2">
            FatemehBazgir.js
          </a>{" "}
          | React.js
        </p>
      </header>

      {children}

      <footer className={styles.footer}>
        <p>Developed by Fatemeh with💖</p>
      </footer>
    </div>
  );
}

export default Layout;
