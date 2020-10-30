import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'src/modules/fund';

const useCreate = () => {
  const { title, description, contents, location, duration, goal } = useSelector(({ fund }) => ({
    title: fund.title,
    description: fund.description,
    contents: fund.contents,
    location: fund.location,
    duration: fund.duration,
    goal: fund.goal,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return { onChangeField, title, description, contents, location, duration, goal };
};

export default useCreate;
