import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'api/api';
import Loader from 'components/loader/loader';
import { useStyles } from './reviewsStyles';
import Icon from '../../images/author.svg';

const Reviews = () => {
  const classes = useStyles();
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsFilms = () => {
      setLoading(true);

      fetchReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchReviewsFilms();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ul className={classes.list}>
            {reviews.map(review => (
              <li className={classes.listItem} key={review.id}>
                <img className={classes.listItemIcon} src={Icon} alt="Author" width={100} />
                <div className={classes.listItemInfo}>
                  <h2 className={classes.reviewAuthor}>{review.author}</h2>
                  <p className={classes.reviewContent}>{review.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <p className={classes.noReviewsText}>
          We don't have any reviews for this movie.
        </p>
      )}
    </>
  );
};

export default Reviews;
