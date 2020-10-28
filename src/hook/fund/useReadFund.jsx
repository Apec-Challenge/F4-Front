import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFund } from 'src/modules/fund';

const useReadFund = () => {
  const { funds, error, loading } = useSelector(({ fund, loading }) => ({
    funds: fund.fund,
    error: fund.fundError,
    loading: loading['fund/READ_FUND'],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readFund());
  }, []);
  return { funds, error, loading };
};

export default useReadFund;
