import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import auth from 'src/modules/auth';
import { changeField, readReview, createReview, unloadCreate } from 'src/modules/place';

const useReviewCreate = ({ place_id }) => {
  const { auth, content, rating, review, create, createError, reviewLoading } = useSelector(
    ({ place, auth, loading }) => ({
      auth: auth.authLogin,
      content: place.reviewContent,
      rating: place.rating,
      review: place.review,
      create: place.create,
      createError: place.createError,
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
  }, []);
  useEffect(() => {
    if (create) {
      dispatch(unloadCreate());
    }
    if (createError) {
      console.log(createError);
    }
  }, [create]);
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
