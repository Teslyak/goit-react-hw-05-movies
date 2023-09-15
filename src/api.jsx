import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '02b3fc4c867c86b8e0657790f32792c0'

export const fetchMovies = async () => {
const resp = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return resp.data;
};
