import { useState } from 'react';
import Loader from 'components/loader/loader';
import EditorList from 'components/trendingList/trendingList';
import Form from 'components/form/form';
import { fetchSearchByKeyword } from 'api/api';
import EmptyBlock from '../../components/emptyBlock/emptyBlock';
import NoMoviesBlock from '../../components/noMoviesBlock/noMoviesBlock';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesBlock, setNoMoviesBlock] = useState(false);
  const [emptyBlock, setEmptyBlock] = useState(true);
  
  const searchMovies = queryMovie => {
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
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {emptyBlock && <EmptyBlock />}
      {searchFilms && <EditorList films={searchFilms} />}
      {noMoviesBlock && <NoMoviesBlock />}
    </main>
  );
};

export default Movies;
