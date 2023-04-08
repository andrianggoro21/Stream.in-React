import axios from "axios";


export const getMovies = async () => {
  const movieList = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1324215dea2a28c54f4515198037880f&language=en-US&page=1`); // Ambil data API Popular movies
  //console.log(movieList.data.results); //Cek data nya dimovies sesuai path array objek yang terlihat di console
  return movieList.data.results;
};
