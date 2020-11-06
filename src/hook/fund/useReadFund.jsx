import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFundList } from 'src/modules/fund';

const useReadFund = () => {
  const { funds, error, loading } = useSelector(({ fund, loading }) => ({
    funds: fund.funds,
    error: fund.fundError,
    loading: loading['fund/READ_FUNDLIST'],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readFundList());
  }, [dispatch]);
  return { funds, error, loading };
};

export default useReadFund;
