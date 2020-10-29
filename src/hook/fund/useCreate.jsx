import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'src/modules/fund';

const useCreate = () => {
  const { title, description, location, duration } = useSelector(({ fund }) => ({
    title: fund.title,
    description: fund.description,
    location: fund.location,
    duration: fund.duration,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return { onChangeField, title, description, location, duration };
};

export default useCreate;
