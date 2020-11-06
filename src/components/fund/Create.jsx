import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import useCreate from 'src/hook/fund/useCreate';
import useReadPlace from 'src/hook/place/useReadPlace';

const Create = ({ history }) => {
  const {
    onSubmit,
    onChangeField,
    unloadCreate,
    title,
    description,
    address,
    funding_goal_amount,
    create,
    createError,
  } = useCreate();
  const dispatch = useDispatch();
  const { places, loading } = useReadPlace();
  const [endDate, setEndDate] = useState();
  const [show, setShow] = useState({});
  const [active, setActive] = useState({});
  const [thumbnail, setThumbnail] = useState();
  const [image, setImage] = useState();
  const onChangeTitle = e => onChangeField({ key: 'title', value: e.target.value });
  const onChangeDesc = e => onChangeField({ key: 'description', value: e.target.value });
  const onChangeThumb = e => {
    onChangeField({ key: 'thumbnail_image', value: e.target.files[0] });
    setThumbnail(e.target.files[0].name);
  };
  const onChangeImage = e => {
    onChangeField({ key: 'content_image', value: e.target.files[0] });
    setImage(e.target.files[0].name);
  };
  const onChangeGoal = e => onChangeField({ key: 'funding_goal_amount', value: e.target.value });
  const onChangePlace = placeID => onChangeField({ key: 'place', value: placeID });
  const onChangeAddress = adrs => onChangeField({ key: 'address', value: adrs });
  const onChangeDuration = date => onChangeField({ key: 'ended_at', value: date });
  const onMarkerClick = (props, marker, e) => {
    const placeID = props.name;
    const adrs = props.address;
    setShow(Object.assign(show, { [placeID]: true }));
    setActive(marker);
    onChangePlace(placeID);
    onChangeAddress(adrs);
  };
  const onClickClose = placeID => {
    setShow(Object.assign(show, { [placeID]: false }));
  };
  useEffect(() => {
    onChangeDuration(endDate);
  }, [endDate]);
  useEffect(() => {
    if (create) {
      const { id } = create;
      history.push(`/fund/detail/${id}`);
    }
    if (createError) console.log(createError);
  }, [history, create, createError]);
  useEffect(() => {
    return () => {
      dispatch(unloadCreate());
    };
  }, [dispatch, create]);
  return (
    <main id="main" className="site-main">
      <div className="page-title background-campaign">
        <img
          src="https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style={{ height: '220px', width: '100%' }}
        />
        <div className="container">
          <h1>Start a funding</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Funding</Link>
                <span>/</span>
              </li>
              <li>Start a funding</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="campaign-form form-update">
        <div className="container">
          <form encType="multipart/form-data" onSubmit={onSubmit}>
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
                  <div className="upload-bg" style={{ overflow: 'hidden' }}>
                    <div id="myfileupload">
                      <input
                        type="file"
                        id="uploadfile1"
                        name="ImageUpload"
                        onChange={onChangeThumb}
                        style={{ display: 'none' }}
                      />
                    </div>
                    {thumbnail ? (
                      <div id="thumbbox">
                        <label className="filename">{thumbnail}</label>
                        <div
                          className="removeimg"
                          onClick={() => setThumbnail(null)}
                          style={{ cursor: 'pointer', left: '145px' }}
                        />
                      </div>
                    ) : (
                      <div id="boxchoice">
                        <label className="choicefile" htmlFor="uploadfile1">
                          <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload Thumbnail
                          <p />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <div className="file-upload">
                  <div className="upload-bg" style={{ overflow: 'hidden' }}>
                    <div id="myfileupload">
                      <input
                        type="file"
                        id="uploadfile2"
                        name="ImageUpload"
                        onChange={onChangeImage}
                        style={{ display: 'none' }}
                      />
                    </div>
                    {image ? (
                      <div id="thumbbox">
                        <label className="filename">{image}</label>
                        <div
                          className="removeimg"
                          onClick={() => setImage(null)}
                          style={{ cursor: 'pointer', left: '145px' }}
                        />
                      </div>
                    ) : (
                      <div id="boxchoice">
                        <label className="choicefile" htmlFor="uploadfile2">
                          <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload Image
                          <p />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="field clearfix">
              <label htmlFor="clocation">Campaign Place *</label>
              <span className="label-desc">
                Choose the location where you are running the campaign.
              </span>
              {places && !loading && (
                <div id="google-map">
                  <Map google={window.google} zoom={15} initialCenter={{ lat: 37.5, lng: 127 }}>
                    {places.map(p => (
                      <Marker
                        key={p.place_id}
                        name={p.place_id}
                        address={p.address}
                        position={{ lat: p.lat, lng: p.lng }}
                        onClick={onMarkerClick}
                      />
                    ))}
                    {places.map(p => (
                      <InfoWindow
                        key={p.place_id}
                        visible={show[p.place_id]}
                        marker={active}
                        onClose={() => onClickClose(p.place_id)}
                      >
                        <div>
                          <h1>{p.address}</h1>
                        </div>
                      </InfoWindow>
                    ))}
                  </Map>
                </div>
              )}
              <div>{address}</div>
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
