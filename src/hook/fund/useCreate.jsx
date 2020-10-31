import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, createFund } from 'src/modules/fund';

const useCreate = () => {
  const {
    title,
    description,
    thumbnail_image,
    content_image,
    funding_goal_amount,
    place,
    ended_at,
  } = useSelector(({ fund }) => ({
    title: fund.title,
    thumbnail_image: fund.thumbnail_image,
    content_image: fund.content_image,
    description: fund.description,
    funding_goal_amount: fund.funding_goal_amount,
    place: fund.place,
    ended_at: fund.ended_at,
  }));
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      createFund({
        title,
        description,
        thumbnail_image:
          'https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
        content_image:
          'https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
        funding_goal_amount,
        place,
        ended_at,
      })
    );
  };
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return {
    onSubmit,
    onChangeField,
    title,
    description,
    thumbnail_image,
    content_image,
    funding_goal_amount,
    place,
    ended_at,
  };
};

export default useCreate;
