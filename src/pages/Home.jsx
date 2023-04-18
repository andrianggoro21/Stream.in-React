import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import "../assets/css/style.css";
import Star from "../assets/images/rating.png";
import { API_KEY } from "../api/apiTmdb";

function Home() {
  const [data, setData] = useState();
  const [watchList, setwatchList] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=1324215dea2a28c54f4515198037880f&language=en-US"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/account/{account_id}/lists?api_key=${API_KEY}&session_id=${localStorage.getItem(
        "sessionID"
      )}`,
    })
      .then((response) => {
        setwatchList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddMovie = (listID, MovieID) => {
    axios({
      method: "post",
      url: `https://api.themoviedb.org/3/list/${listID}/add_item?api_key=${API_KEY}&session_id=${localStorage.getItem(
        "sessionID"
      )}`,
      data: {
        media_id: MovieID,
      },
    })
      .then((response) => {
        console.log(response);
        alert("Movie added successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("The movie already on your list!");
      });
  };
  const renderFooter = () => {
    if (localStorage.getItem("sessionID")) {
      return (
        <button
          type="button"
          className="btn button-style text-white dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Add to watch list
        </button>
      );
    }
  };

  return (
    <div>
      <Carousel />
      <div className="container-md">
        <hr className="bg-light lines-style mt-5 mb-5" />
      </div>
      <div className="container-md">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
          {data &&
            data.results.map((r) => (
              <div
                key={r.id}
                className="card text-center text-white background-color shadow-style card-style"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${r.poster_path}`}
                  className="card-img-top rounded"
                  alt={r.title}
                ></img>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn text-white button-style"
                    data-bs-toggle="modal"
                    data-bs-target={`#staticBackdrop_${r.id}`}
                  >
                    Details
                  </button>
                </div>
                <div
                  className="modal fade"
                  id={`staticBackdrop_${r.id}`}
                  tabIndex="-1"
                  aria-labelledby="modal-title"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content text-white background-color">
                      <img
                        src={`https://image.tmdb.org/t/p/original${r.backdrop_path}`}
                        className="card-img-top rounded"
                        alt={r.title}
                      ></img>
                      <div className="modal-body">
                        <h5 className="modal-title">{r.title}</h5>
                        <p>ID: {r.id}</p>
                        <p>
                          <img src={Star} alt="rating" />
                          Popularity: {r.popularity}
                        </p>
                        <p>{r.overview}</p>
                      </div>
                      <div className="modal-footer">
                        {renderFooter()}
                        <ul className="dropdown-menu button-style">
                          {watchList &&
                            watchList.results.map((item) => (
                              <li key={item.id}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                  className="dropdown-item text-white"
                                  href="#"
                                  onClick={() => handleAddMovie(item.id, r.id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-plus-lg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                    />
                                  </svg>
                                  {item.name}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
