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
              <label htmlFor="title">Campaign Title *</label>
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
              <label htmlFor="capaignstory">Campaign Story *</label>
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
              <div className="list-upload">
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
                <div className="file-upload">
                  <div className="upload-bg">
                    <div id="myfileupload1">
                      <input type="file" id="uploadfile1" name="ImageUpload" onChange={onChange} />
                    </div>
                    <div id="thumbbox1">
                      <img
                        src="images/assets/logo.png"
                        height="100"
                        width="100"
                        alt="Thumb"
                        id="thumbimage1"
                      />
                      <Link className="removeimg1" to="/"></Link>
                    </div>
                    <div id="boxchoice1">
                      <Link to="/" className="choicefile1">
                        <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload Image
                      </Link>
                      <p></p>
                    </div>
                    <label className="filename1"></label>
                  </div>
                </div>
                <div className="file-upload">
                  <div className="upload-bg">
                    <div id="myfileupload2">
                      <input type="file" id="uploadfile2" name="ImageUpload" onChange={onChange} />
                    </div>
                    <div id="thumbbox2">
                      <img
                        src="images/assets/logo.png"
                        height="100"
                        width="100"
                        alt="Thumb"
                        id="thumbimage2"
                      />
                      <Link className="removeimg2" to="/" />
                    </div>
                    <div id="boxchoice2">
                      <Link to="/" className="choicefile2">
                        <i className="fa fa-cloud-upload" aria-hidden="true" /> Upload Image
                      </Link>
                      <p></p>
                    </div>
                    <label className="filename2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="field clearfix">
              <label htmlFor="clocation">Campaign Location *</label>
              <span className="label-desc">
                Choose the location where you are running the campaign.
              </span>
              <div className="field align-left">
                <input type="text" value="" id="clocation" placeholder="City" onChange={onChange} />
              </div>
              <div className="field align-right">
                <div className="field-select">
                  <select name="s">
                    <option value="">United States</option>
                    <option value="">France</option>
                    <option value="">Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="ccat">Campaign Category *</label>
              <span className="label-desc">
                To help backers find your campaign, select a category that best represents your
                project.
              </span>
              <div className="field-select">
                <select name="s" id="ccat">
                  <option value="">Select a Category</option>
                  <option value="">Crafts</option>
                  <option value="">Book</option>
                  <option value="">Perfomances</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="tag">Tags *</label>
              <span className="label-desc">
                Enter up to five keywords that best describe your campaign.
              </span>
              <input
                type="text"
                id="tag"
                value=""
                name="title"
                placeholder="Enter a few tags for your campaign"
                onChange={onChange}
              />
            </div>
            <div className="field">
              <label htmlFor="cduration">Campaign Duration *</label>
              <span className="label-desc">
                You can run a campaign for any number of days, with a 60 day duration maximum.
              </span>
              <input
                type="text"
                id="cduration"
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
