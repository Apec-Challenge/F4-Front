import { useState, useCallback } from 'react';
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
    address,
    ended_at,
  } = useSelector(({ fund }) => ({
    title: fund.title,
    thumbnail_image: fund.thumbnail_image,
    content_image: fund.content_image,
    description: fund.description,
    funding_goal_amount: fund.funding_goal_amount,
    place: fund.place,
    address: fund.address,
    ended_at: fund.ended_at,
  }));
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [thumb, setThumb] = useState();
  const onImgChange = e => setImage(e.target.files[0]);
  const onThumbChange = e => setThumb(e.target.files[0]);
  const onSubmit = e => {
    e.preventDefault();
    // const fd = new FormData();
    // fd.append('title', title);
    // fd.append('description', description);
    // fd.append('thumbnail_image', thumb);
    // fd.append('content_image', image);
    // fd.append('funding_goal_amount', funding_goal_amount);
    // fd.append('place', place);
    // fd.append('ended_at', ended_at);
    // dispatch(createFund(fd));
    dispatch(
      createFund({
        title,
        description,
        thumbnail_image,
        content_image,
        funding_goal_amount,
        place,
        ended_at,
      })
    );
  };
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return {
    onSubmit,
    onImgChange,
    onThumbChange,
    onChangeField,
    title,
    description,
    thumbnail_image,
    content_image,
    funding_goal_amount,
    place,
    address,
    ended_at,
  };
};

export default useCreate;
