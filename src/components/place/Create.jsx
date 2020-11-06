import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import useCreate from 'src/hook/place/useCreate';

const Create = ({ history }) => {
  const {
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
  } = useCreate();
  const dispatch = useDispatch();
  const [place, setPlace] = useState([]);
  const onChangePlaceID = placeID => onChangeField({ key: 'place_id', value: placeID });
  const onChangeTitle = e => onChangeField({ key: 'title', value: e.target.value });
  const onChangeDesc = e => onChangeField({ key: 'description', value: e.target.value });
  const onChangeAddress = e => {
    const placeID = e.target.value.slice(-27);
    const idx = e.target.value.indexOf(placeID);
    const adrs = e.target.value.slice(0, idx - 1);
    onChangeField({ key: 'address', value: adrs });
    onChangePlaceID(placeID);
  };
  const onChangeLocation = locate => onChangeField({ key: 'location', value: locate });
  const onChangeImage = e => onChangeField({ key: 'place_image', value: e.target.files[0] });
  const onChangePPE = e =>
    onChangeField({ key: 'PPE', value: { ...PPE, [e.target.name]: e.target.value } });
  const onMapClick = (mapProps, map, e) => {
    const locate = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    onChangeLocation(locate);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locate.lat},${locate.lng}&language=En&radius=100&key=AIzaSyCxpmfP0AdumaoSQgrXgdO7bM_f2g63v1A`,
        {
          headers: {
            'Access-Control-Allow-Origin': 'https://maps.googleapis.com/',
            'X-Requested-With': 'XMLHttpRequest',
          },
        }
      )
      .then(res => setPlace(res.data.results));
  };
  useEffect(() => {
    if (create) {
      const placeID = create.place_id;
      history.push(`/place/detail/${placeID}`);
    }
    if (createError) console.log(createError);
  }, [history, create, createError]);
  useEffect(() => {
    return () => {
      dispatch(unloadCreate());
    };
  }, [create]);
  return (
    <main id="main" className="site-main">
      <div className="page-title background-campaign">
        <img
          src={require('src/images/place-banner.jpg')}
          alt=""
          style={{ height: '220px', width: '1920px' }}
        />
        <div className="container">
          <h1>Add a place</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <span>/</span>
              </li>
              <li>Add a place</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="campaign-form form-update">
        <div className="container">
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <h4>Add a place</h4>
            <div className="field">
              <label htmlFor="title">Place name *</label>
              <span className="label-desc">What is the title of the place?</span>
              <input
                type="text"
                value={title}
                id="title"
                name="title"
                placeholder="The Oreous Pillow"
                onChange={onChangeTitle}
              />
            </div>
            <div className="field">
              <label htmlFor="campaigndesc">Place Description *</label>
              <span className="label-desc">
								Provide a short description that best describes the place.
              </span>
              <textarea
                rows="4"
                id="campaigndesc"
                placeholder="Enter a few tagline"
                onChange={onChangeDesc}
              />
            </div>
            <div className="field">
              <label htmlFor="capaignstory">Place Address *</label>
              <div id="google-map">
                <Map
                  google={window.google}
                  zoom={15}
                  initialCenter={{ lat: 37.5, lng: 127 }}
                  onClick={onMapClick}
                >
                  {location && <Marker position={{ lat: location.lat, lng: location.lng }} />}
                </Map>
              </div>
              <select name="address" onChange={onChangeAddress} style={{ marginTop: '10px' }}>
                {place.map(p => (
                  <option key={p.place_id} value={`${p.vicinity} ${p.name} ${p.place_id}`}>
                    {p.vicinity === p.name ? p.vicinity : `${p.vicinity} ${p.name}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="uploadfile">Place Image *</label>
              <span className="label-desc">
								Upload a square image that represents place. 570 x 350 recommended
                resolution.
              </span>
              <div className="file-upload">
                <div className="upload-bg">
                  <div id="myfileupload">
                    <input
                      type="file"
                      id="uploadfile"
                      name="ImageUpload"
                      onChange={onChangeImage}
                    />
                  </div>
                  <div id="thumbbox">
                    <img
                      src="images/assets/logo.png"
                      height="100"
                      width="100"
                      alt="Thumb"
                      id="thumbimage"
                    />
                    <Link className="removeimg" to="/" />
                  </div>
                  <div id="boxchoice">
                    <Link to="/" className="choicefile">
                      <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload Image
                    </Link>
                    <p />
                  </div>
                  <label className="filename" />
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="PPE">Place PPE *</label>
              <span className="label-desc">PPE</span>
              <span style={{ marginTop: '10px' }}>Person hygiene</span>
              <select name="person_hygiene" onChange={onChangePPE}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <span style={{ marginTop: '10px' }}>Hand Sanitizer</span>
              <select name="hand_sanitizer" onChange={onChangePPE}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <span style={{ marginTop: '10px' }}>Body temperature check</span>
              <select name="body_temperature_check" onChange={onChangePPE}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button type="submit" value="Save & Launch" className="btn-primary">
              Save & Launch
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCxpmfP0AdumaoSQgrXgdO7bM_f2g63v1A',
})(Create);
