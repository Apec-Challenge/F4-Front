import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'src/modules/place';

const useCreate = () => {
  const { title, place_image, description, address, location, counts, PPE } = useSelector(
    ({ place }) => ({
      title: place.title,
      place_image: place.place_image,
      description: place.description,
      address: place.address,
      location: place.location,
      counts: place.counts,
      PPE: place.PPE,
    })
  );
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return { onChangeField, title, place_image, description, address, location, counts, PPE };
};

export default useCreate;
