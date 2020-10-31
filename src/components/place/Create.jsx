import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCreate from 'src/hook/place/useCreate';

const Create = () => {
  const {
    onChangeField,
    title,
    place_image,
    description,
    address,
    location,
    counts,
    PPE,
  } = useCreate();
  const onChangeTitle = e => onChangeField({ key: 'title', value: e.target.value });
  const onChangeDesc = e => onChangeField({ key: 'description', value: e.target.value });
  const onChangeAddress = e => onChangeField({ key: 'address', value: e.target.value });
  const onChangeImage = e => onChangeField({ key: 'place_image', value: e.target.value });
  const onChangePPE = e => onChangeField({ key: 'PPE', value: e.target.value });
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
          <form action="#">
            <h4>Start a campaign</h4>
            <div className="field">
              <label htmlFor="title">Campaign Name *</label>
              <span className="label-desc">What is the title of your campaign?</span>
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
              <label htmlFor="campaigndesc">Campaign Description *</label>
              <span className="label-desc">
                Provide a short description that best describes your campaign to your audience.
              </span>
              <textarea
                rows="4"
                id="campaigndesc"
                placeholder="Enter a few tagline"
                onChange={onChangeDesc}
              />
            </div>
            <div className="field">
              <label htmlFor="capaignstory">Campaign Address *</label>
              <span className="label-desc">
                Introduce yourself, your campaign and why it’s important to you.
              </span>
              <textarea
                rows="4"
                id="capaignstory"
                placeholder="Enter a few tagline"
                onChange={onChangeAddress}
              />
            </div>
            <div className="field">
              <label htmlFor="uploadfile">Campaign Image *</label>
              <span className="label-desc">
                Upload a square image that represents your campaign. 570 x 350 recommended
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
                    <p></p>
                  </div>
                  <label className="filename"></label>
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="PPE">Campaign PPE *</label>
              <span className="label-desc">
                You can run a campaign for any number of days, with a 60 day duration maximum.
              </span>
              <input
                type="text"
                id="PPE"
                value=""
                name="title"
                placeholder="60 days"
                onChange={onChangePPE}
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

export default Create;
