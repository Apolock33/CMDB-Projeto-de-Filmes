import React, { useEffect, useState } from 'react';
import { getMoviesList, searchMovie } from './services/movieService';
import { Button } from '@mui/material';
import CardsMovies from './components/cardsMovies';
import './assets/css/app.css';
import { formatDate } from './services/generalServices';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [filter, setFilter] = useState('Mais Vistos');
  const [page, setPage] = useState(1);

  if (filter.length == 0) {
    setFilter('Mais Vistos');
  }

  useEffect(() => {
    loadMovieList();
  }, [page]);

  const loadMovieList = async () => {
    if (filter.length == 0 || filter == 'Mais Vistos') {
      await getMoviesList(page)
        .then(movies => {
          setMovieList(movieList.concat(movies.data.results));
          console.log(movieList);
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      await searchMovie(page, filter)
        .then(res => {
          if (page == 1) {
            setMovieList(res.data.results);
          } else {
            setMovieList(movieList.concat(res.data.results));
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
    loadMovieList();
  }

  const loadMoreMovies = async () => {
    setPage(page + 1);
    console.log(page);
  }

  return (
    <section className='container'>

      <div className='row text-light text-center my-5'>
        <div className='col-12'>
          <h2>Resultados Para: {filter}</h2>
          <input
            type='text'
            className='w-100 mt-3 searchbar'
            onKeyUp={handleChangeFilter}
            id='searchBar'
            placeholder='Search Movie'
          />
        </div>
      </div>

      <div className='row'>
        {movieList.map(movie => (
          <div className='col-lg-3 col-md-4 col-sm-12 p-2'>
            <CardsMovies
              id={movie.id}
              title={movie.title}
              img={'https://media.themoviedb.org/t/p/w220_and_h330_face' + movie.poster_path}
              date={formatDate(movie.release_date)} />
          </div>
        ))}
      </div>

      <div className='col-12 my-3 text-center'>
        <Button variant='contained' onClick={loadMoreMovies}>
          Show More
        </Button>
      </div>
    </section>
  );
}

export default App;