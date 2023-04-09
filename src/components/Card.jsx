import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import '../assets/css/styles.css'
import rating from '../assets/images/rating.png'
// import ModalCard from "../components/ModalCard"


function Card({ id, title, poster_path, overview, vote_average, release_date}) {
  const baseImgUrl = import.meta.env.VITE_TMDB_IMAGEURL
  const [modalShow, setModalShow] = React.useState(false);


    return(
          <div class="col body-card-content">
            <div class="card">
              <img src={`${baseImgUrl}${poster_path}`}  class="card-img-top" alt="img-popular1"/>
              <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <Button type="button" class="btn btn-primary" onClick={() => setModalShow(true)}>
                  <i class="bi bi-play-circle"></i>
                </Button>
                {/* <ModalCard
                show={modalShow}
                onHide={() => setModalShow(false)}
              /> */}
              </div>
              <div class="card-body card-content-title">
                
                <h6 class="card-title">{title}</h6>
                <span class="h6-genre">{id}</span><br />
                <span class="h6-genre"><img src={rating} alt="rating" /> {vote_average}</span> <br />
                <span class="h6-genre">{release_date}</span>
                <h6 class="h6-genre">{overview}</h6>
              </div>
            </div>
          </div>
    )
    
}

export default Card