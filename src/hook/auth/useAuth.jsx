import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from 'src/modules/auth';

const useAuth = () => {
  const { email, nickname, password1, password2 } = useSelector(({ auth }) => ({
    email: auth.email,
    nickname: auth.nickname,
    password1: auth.password1,
    password2: auth.password2,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return { initialize, onChangeField, email, nickname, password1, password2 };
};

export default useAuth;
