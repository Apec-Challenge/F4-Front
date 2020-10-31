import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import useCreate from 'src/hook/fund/useCreate';
import useReadPlace from 'src/hook/place/useReadPlace';

const Create = () => {
  const {
    onSubmit,
    onChangeField,
    title,
    description,
    thumbnail_image,
    content_image,
    place,
    funding_goal_amount,
    ended_at,
  } = useCreate();
  const { places, error, loading } = useReadPlace();
  const [endDate, setEndDate] = useState();
  const [show, setShow] = useState(false);
  const [active, setActive] = useState();
  const [state, setState] = useState();
  const onChangeTitle = e => onChangeField({ key: 'title', value: e.target.value });
  const onChangeDesc = e => onChangeField({ key: 'description', value: e.target.value });
  const onChangeThumb = e => onChangeField({ key: 'thumbnail_image', value: e.target.files[0] });
  const onChangeImage = e => onChangeField({ key: 'content_image', value: e.target.files[0] });
  const onChangeGoal = e => onChangeField({ key: 'funding_goal_amount', value: e.target.value });
  const onChangePlace = e => onChangeField({ key: 'place', value: e.target.value });
  const onChangeDuration = date => onChangeField({ key: 'ended_at', value: date });
  const onMarkerClick = (props, marker, e) => {
    setShow(true);
    setActive(marker);
    setState(props);
    console.log(props);
    console.log(marker);
  };
  useEffect(() => {
    onChangeDuration(endDate);
  }, [endDate]);
  return (
    <main id="main" className="site-main">
      <div className="page-title background-campaign">
        <div className="container">
          <h1>Start a campaign</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <span>/</span>
              </li>
              <li>Start a campaign</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="campaign-form form-update">
        <div className="container">
          <form onSubmit={onSubmit}>
            <h4>Start a campaign</h4>
            <div className="field">
              <label htmlFor="title">Campaign Title *</label>
              <span className="label-desc">What is the title of your campaign?</span>
              <input
                type="text"
                value={title}
                id="title"
                name="title"
                placeholder="Title"
                onChange={onChangeTitle}
              />
            </div>
            <div className="field">
              <label htmlFor="campaigndesc">Campaign Description *</label>
              <span className="label-desc">
                Provide a short description that best describes your campaign to your audience.
              </span>
              <textarea
                rows="4"
                id="campaigndesc"
                placeholder="Description"
                value={description}
                onChange={onChangeDesc}
              />
            </div>
            <div className="field">
              <label htmlFor="uploadfile">Campaign Image *</label>
              <span className="label-desc">
                Upload a square image that represents your campaign. 570 x 350 recommended
                resolution.
              </span>
              <div className="list-upload">
                <div className="file-upload">
                  <div className="upload-bg">
                    <div id="myfileupload">
                      <input
                        type="file"
                        id="uploadfile"
                        name="ImageUpload"
                        onChange={onChangeThumb}
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
                      <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload Thumbnail
                      <p></p>
                    </div>
                    <label className="filename"></label>
                  </div>
                </div>
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
                      <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload Image
                      <p></p>
                    </div>
                    <label className="filename"></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="field clearfix">
              <label htmlFor="clocation">Campaign Place *</label>
              <span className="label-desc">
                Choose the location where you are running the campaign.
              </span>
              <div style={{ height: '300px', width: '600px' }}>
                <Map
                  google={window.google}
                  style={{ height: '300px', width: '600px' }}
                  zoom={15}
                  initialCenter={{ lat: 37.5, lng: 127 }}
                >
                  {/* {places.map(place => (
                      <Marker
                        key={place.place_id}
                        position={{ lng: place.lng, lat: place.lat }}
                        name={place.address}
                        onClick={onMarkerClick}
                      >
                        <InfoWindow key={place.place_id} visible={true} marker={active}>
                          <div>
                            <h1>asdfasdf</h1>
                          </div>
                        </InfoWindow>
                      </Marker>
                    ))} */}
                  <Marker position={{ lat: 37.5, lng: 127 }}>
                    <InfoWindow>
                      <div>
                        <h1>adsf</h1>
                      </div>
                    </InfoWindow>
                  </Marker>
                </Map>
              </div>
              <div className="field-select">
                {!loading && places && (
                  <select name="s" onChange={onChangePlace}>
                    <option value="" selected disabled hidden>
                      select
                    </option>
                    {places.map(place => (
                      <option key={place.place_id} value={place.place_id}>
                        {place.place_id}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <div className="field">
              <label htmlFor="cduration">Campaign Duration *</label>
              <span className="label-desc">
                You can run a campaign for any number of days, with a 60 day duration maximum.
              </span>
              <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
            </div>
            <div className="field">
              <label htmlFor="goal">Campaign Funding Goal *</label>
              <span className="label-desc">Funding Goal</span>
              <input
                type="number"
                id="goal"
                value={funding_goal_amount}
                name="goal"
                placeholder="$250"
                onChange={onChangeGoal}
              />
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
