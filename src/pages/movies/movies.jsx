import { useState, useEffect } from 'react';
import Loader from 'components/loader/loader';
import MovieList from 'components/movieList/movieList';
import Form from 'components/form/form';
import { fetchSearchByKeyword } from 'api/api';
import EmptyBlock from '../../components/emptyBlock/emptyBlock';
import NoMoviesBlock from '../../components/noMoviesBlock/noMoviesBlock';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesBlock, setNoMoviesBlock] = useState(false);
  const [emptyBlock, setEmptyBlock] = useState(true);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const queryMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryMovie === '') return;

    setLoading(true);
    setEmptyBlock(false);
    
    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesBlock(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [queryMovie]);

  const searchMovies = (query) => {
    setSearchParams(query ? { query } : {});
    setLoading(true);
  };

  return (
    <main>
      <Form onSubmit={searchMovies} />
      {loading && <Loader />}
      {emptyBlock && <EmptyBlock />}
      {searchFilms && <MovieList films={searchFilms} />}
      {noMoviesBlock && <NoMoviesBlock />}
    </main>
  );
};

export default Movies;
