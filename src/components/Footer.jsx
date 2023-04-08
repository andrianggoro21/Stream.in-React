import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../assets/css/styles.css'
import logo from '../assets/images/logo2.png'
import ig from '../assets/images/ig.png'
import twitter from '../assets/images/twitter.png'
import email from '../assets/images/email2.png'

function Footer() {
    return (
    <footer class="text-center text-lg-start bg-black text-muted">
      <div class="body-footer">
        <div class="container-fluid text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="footer-content col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 class="fw-bold mb-4"><img src={logo} alt=""/></h6>
              <p>Streaming movie with best <br/> experience.</p>
            </div>
            <div class="menu-footer col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="fw-bold mb-4 text-white">Menu</h6>
              <p><a href="#!" class="text-white">TV Shows</a></p>
              <p><a href="#!" class="text-white">Movie</a></p>
              <p><a href="#!" class="text-white">MyList</a></p>
              <p><a href="#!" class="text-white">Contact</a></p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <form action="">
                <div class="row">
                  <div class="title-subscribe col-auto mb-4 mb-md-0">
                    <h6>Join our newsletter</h6>
                    <p class="pt-2">We’ll send you our schedule and more informations about movie.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5 col-12 mb-4">
                    <div class="form-outline">
                      <input type="email" id="form5Example25" class="form-control "/>
                    </div>
                  </div>
                  <div class=" btn-subscribe col-auto mb-4">
                    <button type="submit" class="btn mb-4">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="sosmed col-md-4 col-lg-3 col-xl-  mb-4">
              <h6 class="fw-bold mb-4">Social media</h6>
              <div class="d-flex gap-3">
                <a href="#"><img src={ig} alt="ig"/></a>
                <a href="#"><img src={twitter} alt="twitter"/></a>
                <a href="#"><img src={email} alt="email"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center p-4 text-white copyright" >
        <span> © 2023 Copyright:</span>
        <a class="text-reset fw-bold text-white" href="https://mdbootstrap.com/">Andri Anggoro</a>
      </div>
    </footer>
    )
}

export default Footer