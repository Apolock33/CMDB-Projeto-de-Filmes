import React, { useEffect, useState } from "react";
import '../../assets/css/movieDetails.css';
import { getMovieCast, getMovieDetails, getMovieReviews } from "../../services/movieService";
import { formatDate } from "../../services/generalServices";
import { useParams } from "react-router-dom";
import CastCards from "../castCards";
import ReviewsCards from "../reviewsCards";
import { Box, CircularProgress, Typography } from "@mui/material";

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const [reviews, setReviews] = useState([]);
    const [cast, setCast] = useState([]);
    const [genres, setGenres] = useState([]);
    const [productors, setProductors] = useState([]);
    const params = useParams();

    useEffect(() => {
        loadMovieInfo();
        loadMovieCast();
        loadMovieReviews();
        formatDate(movieInfo.release_date)
    }, []);

    const loadMovieInfo = () => {
        getMovieDetails(params.id)
            .then(res => {
                setMovieInfo(res.data);
                setGenres(res.data.genres);
                setProductors(res.data.production_companies);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const loadMovieCast = () => {
        getMovieCast(params.id)
            .then(res => {
                setCast(res.data.cast);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const loadMovieReviews = () => {
        getMovieReviews(params.id)
            .then(res => {
                console.log(res.data.results);
                setReviews(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <section className="container-fluid">
            <div className="row py-5 text-light">
                <div className="col-lg-5 col-md-7 col-sm-12">
                    <img className="w-100 mb-4 rounded-5" src={`https://media.themoviedb.org/t/p/w116_and_h174_face${movieInfo.poster_path}`} />
                </div>
                <div className="col-lg-7 col-md-5 col-sm-12">
                    <div>
                        <h1 className="display-1">{movieInfo.title}</h1>
                        <div className="d-flex align-items-center mt-5">
                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                <CircularProgress className="rating-circle" variant="determinate" value={movieInfo.vote_average * 10} />
                                <Box
                                    sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography className="text-light" variant="caption" component="div">
                                        {`${Math.round(movieInfo.vote_average * 10)}%`}
                                    </Typography>
                                </Box>
                            </Box>
                            <h3 className='mt-2 mx-3'>Classificação Geral dos Utilizadores</h3>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3>Description:</h3>
                        <p>{movieInfo.overview}</p>
                    </div>
                    <div className="mt-5">
                        <h3>Release Date:</h3>
                        <h4>{formatDate(movieInfo.release_date)}</h4>
                    </div>
                    <div className="row">
                        <div className="col-6 mt-4">
                            <h3>Genres:</h3>
                            {genres.map(genre => (
                                <h4>{genre.name}</h4>
                            ))}
                        </div>
                        <div className="col-6 mt-4">
                            <h3>Productors:</h3>
                            {productors.map(productor => (
                                <h4>{productor.name}</h4>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3>Homepage:</h3>
                        <a href={movieInfo.homepage} className="text-white">{movieInfo.homepage}</a>
                    </div>
                </div>
            </div>
            <div className="row text-center text-light">
                <h3 className="my-5">Casting:</h3>
                <div className="col-12 cast-display">
                    {cast.map((famouss) => (
                        <div key={famouss.id} className="mx-3">
                            <CastCards
                                id={famouss.id}
                                img={`https://media.themoviedb.org/t/p/w120_and_h133_face${famouss.profile_path}`}
                                name={famouss.name}
                                character={famouss.character} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container text-center my-5 d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-light mb-3">Reviews:</h3>
                <div className="row">
                    {reviews.map((review) => (
                        <div className="mt-3 col-lg-6 col-md-12 col-sm-12">
                            <ReviewsCards
                                name={review.author}
                                updatedAt={formatDate(review.updated_at)}
                                review={review.content}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;