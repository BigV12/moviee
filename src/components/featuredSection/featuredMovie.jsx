import React from "react";
import { Fragment, useState, useEffect } from "react";
import imdb from "../heroSection/images/imdb.webp";
import tomatoes from "../heroSection/images/tomatoes.webp";
import styles from "./featuredMovies.module.scss";
import movieimg from "./movieimg.webp";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

import axios from "axios";
import Movieid from "../MovieId/movieid";
// import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../../Home";
function FeaturedMovies() {
  const [dataa, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: {
        language: "en-US",
        page: currentPage.toString(),
        per_page: "10", // Set the current page based on state
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzdhMThhNWE2N2Q1N2YwZDU0MWNkMTQ3YTFiNzUzYSIsInN1YiI6IjY0ZmViYTQ1NmEyMjI3MDBlMGYxNjNmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P_FRrKegVKdwx8u6qiu5YaOrzjvDe5RMZsRw9YZ2eGw",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results.splice(10));
        setTotalPages(response.data.total_pages);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [currentPage]);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const genreMapping = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  const action = () => {
    alert("Added to Favourites");
  };
  // body function
  return (
    <Fragment>
      <section className={styles.featured_section}>
        <div className={styles.section_title}>
          <h4>Featured Movie</h4>
          <a href="" className="see">
            See more <FaAngleRight />
          </a>
        </div>

        {/* movie grid */}
        <div className={styles.grid_container}>
          {dataa.map((item) => (
            <div
              key={item.id}
              className={styles.movie_card}
              data-testid="movie-card"
            >
              <button className={styles.heart} onClick={action}>
                <FaRegHeart className={styles.heart_icon} />
              </button>

              <Link to={`/id/${item.id}`} key={item.id} className={styles.link}>
                <img
                  src={`${baseImageUrl}${item.poster_path}`}
                  alt=""
                  className={styles.movie_poster}
                  data-testid="movie-poster"
                />
                <p
                  className={styles.release_year}
                  data-testid="movie-release-date"
                >
                  {item.release_date}
                </p>
                <h4 data-testid="movie-title"> {item.title}</h4>
                <p className={styles.rating}>
                  <img src={imdb} /> &nbsp;{item.vote_average}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={tomatoes} />
                  &nbsp; 97%
                </p>
                <p className={styles.genre}>
                  {item.genre_ids
                    .map((genreId) => genreMapping[genreId])
                    .join(", ")}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className={styles.pagination_container}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default FeaturedMovies;
