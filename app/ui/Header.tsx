import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import RoundButton from "./RoundButton";
import Beanbag from "/public/Beanbag.svg";
import Hamburger from "/public/hamburger.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.spacer}></div>

      <div className={styles.navbar}>
        <div className={styles.link_container}>
          <div className={styles.hero_image}>
            <Image alt="" src={Beanbag} />
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
            <Image className={styles.hamburger_menu} src={Hamburger} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
