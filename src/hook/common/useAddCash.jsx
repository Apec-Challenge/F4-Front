import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, addCash, fundCash, unloadCash } from 'src/modules/cash';

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
  const onAddCash = () =>
    dispatch(
      addCash({
        money: JSON.parse(parseInt(coin)),
        authorization: auth.key,
      })
    );
  const onUnload = () => dispatch(unloadCash());
  const onFundCash = e => {
    e.preventDefault();
    dispatch(
      fundCash({
        place_id: fund[0].place.place_id,
        money: parseInt(coin),
        authorization: auth.key,
      })
    );
  };
  return {
    onChangeField,
    onUnload,
    onAddCash,
    onFundCash,
    auth,
    coin,
    cash,
    cashError,
    loading,
  };
};

export default useAddCash;
