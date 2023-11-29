import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <main className="main">
      <section className={styles.menu_section}>
        <h2>Menu</h2>
        <div className={styles.spacer}></div>
        <p className={styles.paragraph}>Drinks</p>
        <div className={styles.spacer}></div>
        <div className={styles.menu_divider} />
      </section>
    </main>
  );
};

export default Menu;
