import React from "react";
import { Fragment } from "react";
import styles from "./navBar.module.scss";
import tv from "./images/tv.webp";
import menu from "./images/Menu.webp";
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "d77a18a5a67d57f0d541cd147a1b753a",

            query: searchQuery,
          },
        }
      );

      setSearchResults(response.data.results.splice(0, 3));
      console.log(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

    setLoading(false);
  };
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Fragment>
      <div className={styles.navbar}>
        <div className={styles.logo_container}>
          <img src={tv} />
          <h4 className="box">MovieBox</h4>
        </div>

        <div className={styles.search_container}>
          <input
            placeholder="what do you want to watch?"
            className={styles.searchbar}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch} className={styles.search_btn}>
            <FaSistrix className={styles.icon} />
          </button>
        </div>

        <div className={styles.menu_container}>
          <h4>Sign in</h4>
          <img src={menu} />
        </div>
      </div>

      {/* SEARCHRESULT */}
      {loading && <p>Loading...</p>}

      {searchResults.map((movie) => (
        <div key={movie.id} className={styles.search}>
          <img src={`${baseImageUrl}${movie.poster_path}`} alt="" />
          <p>{movie.title}</p>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </Fragment>
  );
}

export default NavBar;
