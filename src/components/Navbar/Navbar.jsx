import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../assets/css/styles.css'
import logo from '../../assets/images/logo2.png'


function Navbar() {
  return (
    <div className="Home">
      <nav class="navbar navbar-expand-xxl bg-black navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#"><img src={logo} alt="logo"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="./tv-shows.html">TV Shows</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="./movie.html">Movie</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#" data-bs-toggle="modal" data-bs-target="#modalContactUs">Contact Us</a>
            </li>
          </ul>
          <div class="d-flex justify-content-center align-items-center gap-5">
            <form class="d-flex form justify-content-center align-items-center bg-dark" role="search">
              <input class="form-control bg-dark me-2 text-white" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn-search" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
            <div class="btn-navbar d-flex justify-content-center align-items-center gap-4">
              <a href="./signup.html"><button type="button" class="btn btn-outline-primary">Sign Up</button></a>
              <a href="./signin.html"><button type="button" class="btn btn-primary">Sign In</button></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div> 
  )
}

export default Navbar
