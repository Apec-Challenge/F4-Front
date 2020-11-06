import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readUser } from 'src/modules/user';

const useReadUser = () => {
  const { auth, user, userError, userLoading } = useSelector(({ auth, user, loading }) => ({
    auth: auth.authLogin,
    user: user.user,
    userError: user.userError,
    userLoading: loading['user/READ_USER'],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth) dispatch(readUser(auth.pk));
  }, [auth, dispatch]);
  return {
    user,
    userError,
    userLoading,
  };
};

export default useReadUser;
