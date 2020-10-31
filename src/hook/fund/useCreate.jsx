import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'src/modules/fund';

const useCreate = () => {
  const {
    title,
    description,
    thumbnail_image,
    contents_image,
    funding_goal_amount,
    deadline,
  } = useSelector(({ fund }) => ({
    title: fund.title,
    thumbnail_image: fund.thumbnail_image,
    content_image: fund.content_image,
    description: fund.description,
    funding_goal_amount: fund.funding_goal_amount,
    deadline: fund.ended_at,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return {
    onChangeField,
    title,
    description,
    thumbnail_image,
    contents_image,
    funding_goal_amount,
    deadline,
  };
};

export default useCreate;
