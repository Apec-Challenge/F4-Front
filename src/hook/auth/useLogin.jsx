import { useSelector, useDispatch } from 'react-redux';
import { login } from 'src/modules/auth';

const useLogin = () => {
  const { auth, error, loading } = useSelector(({ fund, loading }) => ({
    auth: auth.auth,
    error: auth.authError,
    loading: loading['auth/LOGIN'],
  }));
  const dispatch = useDispatch();
  return { funds, error, loading };
};

export default useLogin;
