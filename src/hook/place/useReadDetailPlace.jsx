import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readPlace } from 'src/modules/place';

const useReadDetailPlace = ({ place_id }) => {
  const { place, error, loading } = useSelector(({ place, loading }) => ({
    place: place.place,
    error: place.placeError,
    loading: loading['place/READ_PLACE'],
  }));
  const dispatch = useDispatch();
  const onReadPlace = place_id => dispatch(readPlace(place_id));
  useEffect(() => {
    if (place_id) {
      dispatch(readPlace(place_id));
    }
  }, [place_id, dispatch]);
  return { onReadPlace, place, error, loading };
};

export default useReadDetailPlace;
