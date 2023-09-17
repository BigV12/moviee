// import { useState } from "react";
import { Fragment } from "react";

import "./App.css";
import HeroPage from "./components/heroSection/heroPage";
import FeaturedMovies from "./components/featuredSection/featuredMovie";
import Footer from "./components/footer/footer";
import Movieid from "./components/MovieId/movieid";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      {/* <Home /> */}
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/movies/:movie_id" element={<Movieid />} />
      </Routes>
    </Fragment>
  );
}

export default App;
