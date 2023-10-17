import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStyles } from './movieListStyles';

const MovieList = ({ films }) => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <ul className={classes.filmsWrapper}>
      {films.map(film => (

        <li className={classes.filmCard} key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <img
                className={classes.filmCardImage}
                src={
                  film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : `https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg`
                } 
                alt="film.title"
                width={300}
              />
              <div className={classes.filmCardOverlay}>
                <p className={classes.filmCardTitle}>{film.title}</p>
                <div className={classes.filmCardInfo}>
                  <span>{film.release_date.slice(0, 4)}</span>
                  <span>{film.vote_average.toFixed(1)} ⭐</span>
                </div>
              </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
