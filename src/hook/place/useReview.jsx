import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, readReview, createReview, unloadCreate } from 'src/modules/place';

const useReviewCreate = ({ place_id }) => {
  const { auth, content, rating, review, reviewError, reviewLoading } = useSelector(
    ({ place, auth, loading }) => ({
      auth: auth.authLogin,
      content: place.reviewContent,
      rating: place.rating,
      review: place.review,
      reviewError: place.reviewError,
      reviewLoading: loading['place/READ_REVIEW'],
    })
  );
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(createReview({ user: auth.pk, place: place_id, content, rating, user_likes: [] }));
  };
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  useEffect(() => {
    dispatch(readReview(place_id));
  }, [dispatch, place_id]);
  useEffect(() => {
    if (review) {
      dispatch(unloadCreate());
    }
    if (reviewError) {
      console.log(reviewError);
    }
  }, [dispatch, review, reviewError]);
  return {
    onSubmit,
    onChangeField,
    review,
    reviewLoading,
    content,
    rating,
  };
};

export default useReviewCreate;
