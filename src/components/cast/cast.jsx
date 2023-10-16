import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from 'api/api';
import Loader from 'components/loader/loader';
import { useStyles } from './castStyles';

const Cast = () => {
  const classes = useStyles(); 
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = () => {
      setLoading(true);

      fetchActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <ul className={classes.list}>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li className={classes.listItem} key={id}>
            <img
              className={classes.listItemImage}
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg`
              }
              alt={original_name}
            />
            <div className={classes.listItemInfo}>
              <p className={classes.name}>{name}</p>
              <p className={classes.character}>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
