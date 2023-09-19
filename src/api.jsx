import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '02b3fc4c867c86b8e0657790f32792c0'

export const fetchTrendingMovies = async () => {
const resp = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return resp.data;
};

export const getMoviesDetails = async (movie_id) => {
const resp = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
  return resp.data;
};

export const getCredits = async (movie_id) => {
const resp = await axios.get(`/movie/${movie_id}/credits?api_key=${API_KEY}`);
  return resp.data;
};

export const getReviews = async (movie_id) => {
const resp = await axios.get(`/movie/${movie_id}/reviews?api_key=${API_KEY}`);
  return resp.data;
};

export const getSearchMovie = async (searchMovie) => {
const resp = await axios.get(`search/movie?query=${searchMovie}&api_key=${API_KEY}`);
  return resp.data;
};