"use client";

import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import RoundButton from "./RoundButton";
import { CldImage } from "next-cloudinary";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.spacer} />
      <div className={styles.navbar}>
        <div className={styles.link_container}>
          <div className={styles.hero_image}>
            <CldImage
              alt="BeanbagCoffee/Beanbag_o1njjx"
              width="50"
              height="50"
              src="BeanbagCoffee/Beanbag_o1njjx"
            />
          </div>
          <div className={styles.links}>
            <Link href="/menu">
              <h4 className={styles.link}>MENU</h4>
            </Link>
            <Link href="/rewards">
              <h4 className={styles.link}>REWARDS</h4>
            </Link>
            <Link href="/gift-cards">
              <h4 className={styles.link}>GIFT CARDS</h4>
            </Link>
          </div>
        </div>
        <div className={styles.button_container}>
          <RoundButton
            href="/signin"
            className={styles.button_signin}
            buttonText="Sign In"
          />
          <RoundButton
            href="/join"
            className={styles.button_joinnow}
            buttonText="Join Now"
          />
        </div>
        <div className={styles.menu}>
          <Link href="">
            <CldImage
              className={styles.hamburger_menu}
              alt="BeanbagCoffee/hamburger_ztvs3l"
              width="50"
              height="50"
              src="BeanbagCoffee/hamburger_ztvs3l"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
