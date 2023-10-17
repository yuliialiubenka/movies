import React, { useEffect, useState } from 'react';
import MovieList from 'components/movieList/movieList';
import { fetchTrending } from 'api/api';
import Loader from 'components/loader/loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
