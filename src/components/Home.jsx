import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/styles.css'
import Navbar from '../components/Navbar/Navbar'
import imgCorousel1 from '../assets/images/img-carousel-new1.png'
import imgCorousel2 from '../assets/images/img-carousel-new2.png'
import imgCorousel3 from '../assets/images/img-carousel-new3.png'


function Home() {
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
    </div>
  )
}

export default Home
