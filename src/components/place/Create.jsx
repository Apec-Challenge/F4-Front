import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
  const [state, setState] = useState();
  const onChange = e => {
    setState({ name: e.target.value });
  };
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
                value=""
                id="title"
                name="title"
                placeholder="The Oreous Pillow"
                onChange={onChange}
              />
            </div>
            <div className="field">
              <label htmlFor="campaigndesc">Campaign Description *</label>
              <span className="label-desc">
                Provide a short description that best describes your campaign to your audience.
              </span>
              <textarea rows="4" id="campaigndesc" placeholder="Enter a few tagline" />
            </div>
            <div className="field">
              <label htmlFor="capaignstory">Campaign Address *</label>
              <span className="label-desc">
                Introduce yourself, your campaign and why it’s important to you.
              </span>
              <textarea rows="4" id="capaignstory" placeholder="Enter a few tagline" />
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
                    <input type="file" id="uploadfile" name="ImageUpload" onChange={onChange} />
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
              <label htmlFor="PPE">Campaign Duration *</label>
              <span className="label-desc">
                You can run a campaign for any number of days, with a 60 day duration maximum.
              </span>
              <input
                type="text"
                id="PPE"
                value=""
                name="title"
                placeholder="60 days"
                onChange={onChange}
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
