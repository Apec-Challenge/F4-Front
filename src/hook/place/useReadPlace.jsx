import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readPlaceList } from 'src/modules/place';

const useReadPlace = () => {
  const { places, error, loading } = useSelector(({ place, loading }) => ({
    places: place.place,
    error: place.placeError,
    loading: loading['fund/READ_FUND'],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPlaceList());
  }, []);
  return { places, error, loading };
};

export default useReadPlace;
