import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
import LinkedIn from "/public/linkedIn.svg";
import Facebook from "/public/facebook.svg";
import Instagram from "/public/instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div>
          <div className={styles.spacer}></div>
          <div className={styles.social_icons}>
            <Image alt="" src={Instagram} />
            <Image alt="" src={Facebook} />
            <Image alt="" src={LinkedIn} />
          </div>
        </div>
        <div>
          <div className={styles.spacer}></div>
          <div className={styles.footer_row}>
            <Link href="/privacy">
              <h3 className={styles.link}>Privacy Notice</h3>
            </Link>
            <h3 className={styles.link}>|</h3>
            <Link href="/tos">
              <h3 className={styles.link}>Terms of Use</h3>
            </Link>
            <h3 className={styles.link}>|</h3>
            <Link href="/noshare">
              <h3 className={styles.link}>
                Do Not Share My Personal Information
              </h3>
            </Link>
            <h3 className={styles.link}>|</h3>
            <Link className={styles.link} href="/partners">
              <h3 className={styles.link}>Partners</h3>
            </Link>
          </div>
          <div className={styles.spacer}></div>
          <p>2023 Beanbag Coffee Co. All rights reserved.</p>
        </div>
        <div className={styles.spacer}></div>
      </div>
    </div>
  );
};

export default Footer;
