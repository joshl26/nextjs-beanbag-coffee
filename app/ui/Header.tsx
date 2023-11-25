import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
import RoundButton from "./RoundButton";
import Beanbag from "/public/Beanbag.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.link_container}>
          <div className={styles.hero_image}>
            <Image alt="" src={Beanbag} />
          </div>
        </div>

        <div className={styles.button_container}>
          <RoundButton
            href="/sign-in"
            className={styles.button_signin}
            buttonText="Sign In"
          />
          <RoundButton
            href="/sign-in"
            className={styles.button_joinnow}
            buttonText="Join Now"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
