import axios from "axios";

const baseUrl = import.meta.env.VITE_TMDB_BASEURL
const apiKey = import.meta.env.VITE_TMDB_APIKEY
const baseImgUrl = import.meta.env.VITE_TMDB_IMAGEURL

export const apiProfile = async () => {
  const profileDetail = await axios.get(
    `${baseUrl}/account?api_key=${apiKey}&session_id=${localStorage.getItem("SID")}`
  );
  return profileDetail.data;
};
