import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import styles from "./movieid.module.scss";
import logo from "./logo.webp";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { BsTv } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import vid from "./movieimg.webp";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaTicket } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import more from "./more.webp";
import { Link } from "react-router-dom";

function Movieid() {
  const { movieId } = useParams();
  const [dataa, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [year, setYear] = useState([]);
  const [time, setTime] = useState([]);
  const [genre, setGenre] = useState([]);
  const [vote, setVote] = useState([]);
  const [vid, setVid] = useState([]);
  const [overview, setOverview] = useState([]);
  const [vote_average, setVote_average] = useState([]);

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

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    const options = {
      method: "GET",
      url: url,
      params: {
        language: "en-US",
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
        setData(response.data);
        setTitle(response.data.title);
        const releaseDate = new Date(response.data.release_date);
        const utcReleaseDate = releaseDate.toUTCString();
        setYear(utcReleaseDate);
        setTime(response.data.runtime);
        // setGenre(response.data.genres);
        setVote(response.data.vote_count);
        setVid(response.data.backdrop_path);
        setOverview(response.data.overview);
        setVote_average(response.data.vote_average);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const action = () => {
    alert("this is working");
  };
  return (
    <Fragment>
      <div className={styles.main_container}>
        <div className={styles.side_nav}>
          <img src={logo} alt="" />
          <Link to="/" className={styles.link}>
            <h4>
              {" "}
              <BsHouse className={styles.stay} /> Home
            </h4>
          </Link>
          <h4 className={styles.active}>
            <BsFillCameraReelsFill className={styles.stay} /> Movies
          </h4>
          <h4>
            <BsTv className={styles.stay} /> TvSeries
          </h4>
          <h4>
            <BsFillCaretRightSquareFill className={styles.stay} /> Upcoming
          </h4>
        </div>

        {/* VIEWPORT */}

        <div className={styles.view_port}>
          <img src={`${baseImageUrl}${vid}`} alt="" className={styles.vid} />
          <div className={styles.movie_title}>
            <h4 data-testid="movie-title"> {title} </h4>
            <h4 data-testid='movie-release-date'> {year}</h4>
            <h4>PG-13</h4>
            <h4 data-testid="movie-runtime">{time}</h4>
            <p>{genre}</p>

            <p>
              <FaStar className={styles.star} />
              {vote_average} | {vote}k
            </p>
          </div>

          <div className={styles.details_container}>
            <div className={styles.info}>
              <p className={styles.description} data-testid="movie-overview">
                {overview}
              </p>
              <div className={styles.cast}>
                <p>
                  Director : <span>Joseph Kosinski</span>{" "}
                </p>
                <p>
                  Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span>{" "}
                </p>

                <p>
                  Stars:{" "}
                  <span>Tom Cruise, Jennifer Connelly, Miles Teller </span>{" "}
                </p>
              </div>
              <p className={styles.number}>Top rated movie #65</p>
            </div>
            <div className={styles.ad}>
              <a href="#" className={styles.showtime}>
                <FaTicket className={styles.ticket} />
                &nbsp; See shotimes
              </a>
              <a href="#" className={styles.more}>
                <FaListUl className={styles.list} />
                More Watch Options
              </a>
              <img src={more} className={styles.moreimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Movieid;
