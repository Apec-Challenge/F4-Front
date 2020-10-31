import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFund } from 'src/modules/fund';

const useReadDetailFund = () => {
  const { fund, error, loading } = useSelector(({ fund, loading }) => ({
    fund: fund.fund,
    error: fund.fundError,
    loading: loading['fund/READ_FUND'],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readFund());
  }, []);
  return { fund, error, loading };
};

export default useReadDetailFund;
