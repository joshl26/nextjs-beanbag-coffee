import React from "react";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <div className={styles.side_menu_container}>
      <div className={styles.side_menu_inner_container}>
        <div>
          <h2>Link 1</h2>
          <h2>Link 2</h2>
          <h2>Link 3</h2>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
