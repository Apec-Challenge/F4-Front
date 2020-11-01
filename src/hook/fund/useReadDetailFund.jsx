import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFund } from 'src/modules/fund';

const useReadDetailFund = ({ fund_id }) => {
  const { fund, error, loading } = useSelector(({ fund, loading }) => ({
    fund: fund.fund,
    error: fund.fundError,
    loading: loading['fund/READ_FUND'],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    const id = parseInt(fund_id);
    if (fund_id) {
      dispatch(readFund(id));
    }
  }, [fund_id]);
  return { fund, error, loading };
};

export default useReadDetailFund;
