import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, createFund, unloadCreate } from 'src/modules/fund';

const useCreate = () => {
  const {
    title,
    description,
    thumbnail_image,
    content_image,
    funding_goal_amount,
    place,
    address,
    ended_at,
    create,
    createError,
  } = useSelector(({ fund }) => ({
    title: fund.title,
    thumbnail_image: fund.thumbnail_image,
    content_image: fund.content_image,
    description: fund.description,
    funding_goal_amount: fund.funding_goal_amount,
    place: fund.place,
    address: fund.address,
    ended_at: fund.ended_at,
    create: fund.create,
    createError: fund.createError,
  }));
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('thumbnail_image', thumbnail_image);
    fd.append('content_image', content_image);
    fd.append('funding_goal_amount', funding_goal_amount);
    fd.append('place', place);
    fd.append('ended_at', ended_at.toISOString());
    dispatch(createFund(fd));
  };
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return {
    onSubmit,
    onChangeField,
    unloadCreate,
    title,
    description,
    thumbnail_image,
    content_image,
    funding_goal_amount,
    place,
    address,
    ended_at,
    create,
    createError,
  };
};

export default useCreate;
