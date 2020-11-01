import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, createPlace, unloadCreate } from 'src/modules/place';

const useCreate = () => {
  const {
    place_id,
    title,
    place_image,
    description,
    address,
    location,
    counts,
    PPE,
    create,
    createError,
  } = useSelector(({ place }) => ({
    place_id: place.place_id,
    title: place.title,
    place_image: place.place_image,
    description: place.description,
    address: place.address,
    location: place.location,
    counts: place.counts,
    PPE: place.PPE,
    create: place.create,
    createError: place.createError,
  }));
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('place_id', place_id);
    fd.append('title', title);
    fd.append('place_image', place_image);
    fd.append('description', description);
    fd.append('address', address);
    fd.append('lng', location.lng);
    fd.append('lat', location.lat);
    fd.append('Mask', PPE.Mask);
    fd.append('hand_sanitizer', PPE.hand_sanitizer);
    fd.append('disposable_gloves', PPE.disposable_gloves);
    dispatch(createPlace(fd));
  };
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return {
    onSubmit,
    onChangeField,
    unloadCreate,
    place_id,
    title,
    place_image,
    description,
    address,
    location,
    counts,
    PPE,
    create,
    createError,
  };
};

export default useCreate;
