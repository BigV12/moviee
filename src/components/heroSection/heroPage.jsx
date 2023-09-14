import React from "react";
import { Fragment } from "react";
import styles from "./heroPage.module.scss";
import NavBar from "./navBar";
import imdb from "./images/imdb.webp";
import tomatoes from "./images/tomatoes.webp";
import { FaCirclePlay } from "react-icons/fa6";

function HeroPage() {
  return (
    <Fragment>
      <section className={styles.hero_section}>
        <NavBar />
        <div className={styles.heroitems_container}>
          <div className={styles.hero_text}>
            <h2> John Wick 3: parabellum</h2>
            <p className={styles.rating}>
              <img src={imdb} /> &nbsp;86.0/100
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={tomatoes} />
              &nbsp; 97%
            </p>
            <p>
              John wick is on the run after killingg a member of the
              intrernational assasins guild and with a $14 million price tag on
              his head, he is the target of hit men and women everywhere
            </p>
            <button>
              <FaCirclePlay /> WATCH TRAILER
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HeroPage;
