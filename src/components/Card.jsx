import React, { useState } from "react";
import '../assets/css/styles.css'
import rating from '../assets/images/rating.png'


function Card({ id, title, poster_path, popularity, overview, vote_average}) {
   
    return(
          <div class="col body-card-content">
            <div class="card">
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  class="card-img-top" alt="img-popular1"/>
              <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-Gameofthrones"/>
                <i class="bi bi-play-circle"></i>
              </div>
              <div class="card-body card-content-title">
                <h6 class="card-title">{title}</h6>
                <h6 class="h6-genre"><img src={rating} alt="rating" /> {vote_average}</h6>
              </div>
            </div>
          </div>
    )
    
}

export default Card