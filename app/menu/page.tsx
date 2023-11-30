"use client";

import React from "react";
import { MenuCardDataType } from "../types/types";
import MenuCard from "../ui/MenuCard";
import styles from "./Menu.module.css";

const DrinkData = [
  {
    id: 1,
    title: "Hot Coffees",
    imgUrl: "BeanbagCoffee/coffee-smiley_wqpycu",
    href: "/menu/drinks/hot-coffees",
  },
  {
    id: 2,
    title: "Hot Teas",
    imgUrl: "BeanbagCoffee/hot-teas_j9fp6n",
    href: "/menu/drinks/hot-teas",
  },
  {
    id: 3,
    title: "Hot Drinks",
    imgUrl: "BeanbagCoffee/hot-drinks_mh8cxz",
    href: "/menu/drinks/hot-drinks",
  },
  {
    id: 4,
    title: "Frappucinos",
    imgUrl: "BeanbagCoffee/frappucino_jsqeaj",
    href: "/menu/drinks/frappucinos",
  },
  {
    id: 5,
    title: "Cold Coffees",
    imgUrl: "BeanbagCoffee/coldbrew_mt3tia",
    href: "/menu/drinks/cold-coffees",
  },
  {
    id: 6,
    title: "Iced Teas",
    imgUrl: "BeanbagCoffee/iced-teas_fhmnsh",
    href: "/menu/drinks/iced-teas",
  },
];

const AtHomeData = [
  {
    id: 1,
    title: "Whole Bean",
    imgUrl: "BeanbagCoffee/whole-bean_fa0b3h",
    href: "/menu/at-home/whole-bean",
  },
  {
    id: 2,
    title: "Ground",
    imgUrl: "BeanbagCoffee/ground-coffee_nzdbmn",
    href: "/menu/at-home/ground",
  },
];

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
        {AtHomeData.map((menuCard: MenuCardDataType) => (
          <MenuCard key={menuCard.id} menuCard={menuCard} />
        ))}
      </section>
    </main>
  );
};

export default Menu;
