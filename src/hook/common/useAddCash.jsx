import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, addCash, fundCash } from 'src/modules/cash';

const useAddCash = place_id => {
  const { fund, auth, coin, cash, cashError, loading } = useSelector(
    ({ fund, auth, cash, loading }) => ({
      fund: fund.fund,
      auth: auth.authLogin,
      coin: cash.coin,
      cash: cash.cash,
      cashError: cash.cashError,
      loading: loading['cash/ADD_CASH'],
    })
  );
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  const onAddCash = () => dispatch(addCash({ money: coin, Authorization: auth.key }));
  const onFundCash = e => {
    e.preventDefault();
    dispatch(fundCash({ place: fund[0].place.place_id, money: coin, Authorization: auth.key }));
  };
  return {
    onChangeField,
    onAddCash,
    onFundCash,
    coin,
    cash,
    cashError,
    loading,
  };
};

export default useAddCash;
