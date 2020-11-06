import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFund } from 'src/modules/fund';
import { unloadCash } from 'src/modules/cash';

const useReadDetailFund = ({ fund_id }) => {
  const { cash, fund, error, loading } = useSelector(({ cash, fund, loading }) => ({
    cash: cash.cash,
    fund: fund.fund,
    error: fund.fundError,
    loading: loading['fund/READ_FUND'],
  }));
  const dispatch = useDispatch();
  const onReadFund = id => dispatch(readFund(id));
  useEffect(() => {
    const id = parseInt(fund_id);
    if (fund_id) {
      dispatch(readFund(id));
    }
  }, [fund_id, dispatch]);
  useEffect(() => {
    const id = parseInt(fund_id);
    if (cash) {
      dispatch(readFund(id));
      dispatch(unloadCash());
    }
  }, [cash, fund_id, dispatch]);
  return { onReadFund, fund, error, loading };
};

export default useReadDetailFund;
