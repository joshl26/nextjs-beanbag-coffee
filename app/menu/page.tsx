"use client";

import React from "react";
import { MenuCardDataType } from "../types/types";
import MenuCard from "../ui/MenuCard";
import { DrinkData } from "../data/drinkData";
import { AtHomeData } from "../data/atHomeData";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <main className="main">
      <section className={styles.menu_section}>
        <h2>Menu</h2>
        <div className={styles.spacer} />
        <p className={styles.paragraph}>Drinks</p>
        <div className={styles.spacer} />
        <div className={styles.menu_divider} />
        <div className={styles.spacer} />
        {DrinkData.map((menuCard: MenuCardDataType) => (
          <MenuCard key={menuCard.id} menuCard={menuCard} />
        ))}
        <div className={styles.spacer} />
        <p className={styles.paragraph}>At Home</p>
        <div className={styles.spacer} />
        <div className={styles.menu_divider} />
        <div className={styles.spacer} />

        {AtHomeData.map((menuCard: MenuCardDataType) => (
          <MenuCard key={menuCard.id} menuCard={menuCard} />
        ))}
      </section>
    </main>
  );
};

export default Menu;
