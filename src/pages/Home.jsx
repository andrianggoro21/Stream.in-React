import React, { useState, useEffect }  from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/styles.css'
import Navbar from '../components/Navbar'
import imgCorousel1 from '../assets/images/img-carousel-new1.png'
import imgCorousel2 from '../assets/images/img-carousel-new2.png'
import imgCorousel3 from '../assets/images/img-carousel-new3.png'
import Footer from '../components/Footer'
import Card from "../components/Card";
import { Row } from "react-bootstrap";
import {apiTmdb} from "../api/apiTmdb";


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiTmdb().then((result) => {
      setMovies(result);
    });
  }, []);
  return (
    <div className='home-page'>
    <Navbar />
    <div class="body-content-carousel">
      <div class="container-fluid">
      <Carousel>
      <Carousel.Item>
      <img className="d-block w-100" src={imgCorousel1} alt="First slide" />
      <div class="carousel-btn d-flex align-items-center gap-3">
        <a class="watch-now" href="./streaming.html">
          <button type="button" class="btn btn-primary carousel-btn-play d-flex justify-content-center align-items-center gap-2">
            <img class="w-auto" src="./assets/images/btn-watch.png" alt=""/><span>Watch Now </span>
          </button>
        </a>
        <div class="trailer">
          <button type="button" class="btn btn-outline-light btn-trailer d-flex justify-content-center align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modal-Thewitcher">
              <span>Watch Trailer</span>
          </button>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={imgCorousel2} alt="Second slide" />
      <div class="carousel-btn d-flex align-items-center gap-3">
        <a class="watch-now" href="./streaming.html">
          <button type="button" class="btn btn-primary carousel-btn-play d-flex justify-content-center align-items-center gap-2">
            <img class="w-auto" src="./assets/images/btn-watch.png" alt=""/><span>Watch Now </span>
          </button>
        </a>
        <div class="trailer">
          <button type="button" class="btn btn-outline-light btn-trailer d-flex justify-content-center align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modal-Vikingsvalhalla">
            <span>Watch Trailer</span>
          </button>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={imgCorousel3} alt="Third slide" />
      <div class="carousel-btn d-flex align-items-center gap-3">
        <a class="watch-now" href="./streaming.html">
          <button type="button" class="btn btn-primary carousel-btn-play d-flex justify-content-center align-items-center gap-2">
            <img class="w-auto" src="./assets/images/btn-watch.png" alt=""/><span>Watch Now </span>
          </button>
        </a>
        <div class="trailer">
          <button type="button" class="btn btn-outline-light btn-trailer d-flex justify-content-center align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modal-Gameofthrones">
            <span>Watch Trailer</span>
          </button>
        </div>
      </div>
    </Carousel.Item>
    </Carousel>
    </div>
  </div>
  <div class="body-content-home">
    <div class="card-most-popular">
      <div class="card-content d-flex justify-content-between">
        <span class="card-content-text">Most Popular</span>
        <span class="see-more"><a href="./most-popular.html">See more</a></span>
      </div>
      <Row className="g-4" xs={1} sm={1} md={3} lg={6}>
        {movies.slice(0, 18).map((movie) => (
              <Card key={movie.id} {...movie} />
            ))}
      </Row>
    </div>
  </div>
  <Footer/>
  </div> 
  )
}

export default Home
