import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readPlaceList } from 'src/modules/place';

const useReadPlace = () => {
  const { places, error, loading } = useSelector(({ place, loading }) => ({
    places: place.place,
    error: place.placeError,
    loading: loading['place/READ_PLACELIST'],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPlaceList());
  }, []);
  return { places, error, loading };
};

export default useReadPlace;
