import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'api/api';
import Loader from 'components/loader/loader';
import { useStyles } from './movieDetailsStyles';
import Icon from '../../images/goBack.svg';

const MovieDetails = () => {
  const classes = useStyles();
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);

      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const {
    title,
    release_date,
    overview,
    genres,
    poster_path,
    original_title,
    vote_average,
    vote_count
  } = movieInfo || {};

  return (
    <>
      <Link to={backLinkRef.current} className={classes.link}>
        <button type="button" className={classes.button}>
          <img
            width={42}
            src={Icon}
            alt={"Go back"}
          />
        </button>
      </Link>
      {loading && <Loader />}

      {movieInfo && (
        <div className={classes.wrapper}>
          <img
            className={classes.image}
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg`
            }
            alt={original_title}
          />
          <div className={classes.infoContainer}>
            <h1 className={classes.title}>
              {title} { release_date ? `(${release_date.slice(0, 4)})` : "" }
            </h1>
            <div className={classes.infoWrap}>
              <h2>Release date:</h2>
              <p>{ release_date ? release_date : "Data is missing" }</p>
            </div>
            <div className={classes.infoWrap}>
              <h2>Genres:</h2>
              <ul className={classes.list}>
                {genres.length > 0 ? genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                )) : <li>Data is missing</li>} 
              </ul>
            </div>
            <div className={classes.infoWrap}>
              <h2>Vote average:</h2>
              <p>{vote_average.toFixed(1)}⭐ | {vote_count}</p>
            </div>
            <h2>Overview</h2>
            <p className={classes.overview}>{overview ? overview : "Data is missing"}</p>
            <h2>Additional information</h2>
              <ul className={classes.infoList}>
                <li className={classes.infoListItem}>
                  <Link to="cast" className={classes.linkName}>🡇 Cast</Link>
                </li>
                <li className={classes.infoListItem}>
                  <Link to="reviews" className={classes.linkName}>🡇 Reviews</Link>
                </li>
              </ul>
          </div>
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
