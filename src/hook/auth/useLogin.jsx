import { useSelector, useDispatch } from 'react-redux';
import { login } from 'src/modules/auth';

const useLogin = () => {
  const { auth, error, loading } = useSelector(({ auth, loading }) => ({
    auth: auth.auth,
    error: auth.authError,
    loading: loading['auth/LOGIN'],
  }));
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(login());
  };
  return { onLogin, auth, error, loading };
};

export default useLogin;
