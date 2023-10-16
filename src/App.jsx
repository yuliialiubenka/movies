import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { MainMarkup } from 'components/mainMarkup/mainMarkup';

const Cast = lazy(() => import('components/cast/cast'));
const Reviews = lazy(() => import('components/reviews/reviews'));
const Home = lazy(() => import('pages/home/home'));
const MovieDetails = lazy(() => import('pages/movieDetails/movieDetails'));
const Movies = lazy(() => import('pages/movies/movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainMarkup />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
