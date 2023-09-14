// import { useState } from "react";
import { Fragment } from "react";

import "./App.css";
import HeroPage from "./components/heroSection/heroPage";
import FeaturedMovies from "./components/featuredSection/featuredMovie";
import Footer from "./components/footer/footer";
import Movieid from "./components/MovieId/movieid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      {/* <Movieid /> */}
      <HeroPage />
      <FeaturedMovies />
      <Footer />
      {/* <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/id/:movieId" element={<Movieid />} />
      </Routes> */}
    </Fragment>
  );
}

export default Home;
