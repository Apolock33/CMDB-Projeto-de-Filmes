import api from '../services/api'
import { environment } from '../environments/environment';

const apiInfo = {
    apiKey: environment.apiKey,
    route: '/movie'
}

const getMoviesList = (page = 1) => {
    const request = api.get(`${apiInfo.route}/popular?api_key=${apiInfo.apiKey}&page=${page}`);
    return request;
}

const getMoreMovies = (page) => {
    const request = api.get(`${apiInfo.route}/popular?api_key=${apiInfo.apiKey}&page=${page}`);
    return request;
}

const searchMovie = (page, filter) => {
    const request = api.get(`/search/${apiInfo.route}?api_key=${apiInfo.apiKey}&query=${filter}&page=${page}`);
    return request;
}

const getMovieDetails = (id) => {
    const request = api.get(`${apiInfo.route}/${id}?api_key=${apiInfo.apiKey}`);
    return request;
}

const getMovieCast = (id) => {
    const request = api.get(`${apiInfo.route}/${id}/credits?api_key=${apiInfo.apiKey}`);
    return request;
}

const getMovieReviews = (id) => {
    const request = api.get(`${apiInfo.route}/${id}/reviews?api_key=${apiInfo.apiKey}`);
    return request;
}

const getMovieSimilar = (id) => {
    const request = api.get(`${apiInfo.route}/${id}/similar?api_key=${apiInfo.apiKey}`);
    return request;
}

export { getMovieDetails, getMoviesList, getMoreMovies, searchMovie, getMovieCast, getMovieReviews };