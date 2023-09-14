import React from "react";
import { Fragment } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <Fragment>
      <footer className={styles.footer_container}>
        <div className={styles.social_icons}>
          <FaSquareFacebook />
          <FaInstagram />
          <FaSquareXTwitter />
          <FaYoutube />
        </div>
        <div className={styles.other_links}>
          <p>Condition of Use</p>
          <p>privacy & Policy</p>
          <p>Press Room </p>
        </div>
        <div className={styles.copyright}>
          <p>2021 MovieBox by Adriana Eka Prayudha</p>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
