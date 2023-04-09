import axios from "axios";

const baseUrl = import.meta.env.VITE_TMDB_BASEURL
const apiKey = import.meta.env.VITE_TMDB_APIKEY
const baseImgUrl = import.meta.env.VITE_TMDB_IMAGEURL

export const apiTmdb = async () => {
  const movieList = await axios.get(
    `${baseUrl}/movie/popular?api_key=${apiKey}`
  ); // Ambil data API Popular movies
  //console.log(movieList.data.results); //Cek data nya dimovies sesuai path array objek yang terlihat di console
  return movieList.data.results;
};

