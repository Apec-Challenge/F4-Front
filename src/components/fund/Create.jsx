import React from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <main id="main" className="site-main">
      <div className="page-title background-campaign">
        <div className="container">
          <h1>Start a funding</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
                <span>/</span>
              </li>
              <li>Start a funding</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="container">
          <div className="design-process-section" id="process-tab">
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="basics">
                <div className="start-form">
                  <form action="#">
                    <div className="field">
                      <label for="uploadfile">Project Image</label>
                      <span className="label-desc">
                        This is the first thing that people will see when they come across your
                        project. Choose an image that’s crisp and text-free.{' '}
                        <Link to="/">Here are some tips.</Link>
                      </span>
                      <div className="list-upload">
                        <div className="file-upload">
                          <div className="upload-bg">
                            <div id="myfileupload">
                              <input
                                type="file"
                                id="uploadfile"
                                name="ImageUpload"
                                onchange="readURL(this);"
                                accept="image/*"
                              />
                            </div>
                            <div id="thumbbox">
                              <img
                                src={require('src/images/assets/logo.png')}
                                height="695"
                                width="460"
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
                            <label className="filename"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label for="projecttitle">Project Title</label>
                      <span className="label-desc">
                        Our search looks through words from your project title and blurb, so make
                        them clear and descriptive of what you’re making. Your profile name will be
                        searchable, too.
                      </span>
                      <input type="text" id="projecttitle" value="" maxLength="60" />
                    </div>
                    <div className="field">
                      <label for="shortblurb">Short Blurb</label>
                      <span className="label-desc">
                        Give people a sense of what you’re doing. Skip “Help me” and focus on what
                        you’re making.
                      </span>
                      <textarea id="shortblurb" cols="30" rows="4" maxLength="135" />
                    </div>
                    <div className="field">
                      <label for="field-cat">
                        Category <span>*</span>
                      </label>
                      <span className="label-desc">
                        To help backers find your campaign, select a category that best represents
                        your project.
                      </span>
                      <div className="field-select field-cat">
                        <select id="field-cat">
                          <option selected="selected">Select a category</option>
                          <option value="book">Book</option>
                          <option value="crafts">Crafts</option>
                          <option value="design-art">Design &amp; Art</option>
                          <option value="perfomances">Perfomances</option>
                          <option value="technology">Technology</option>
                        </select>
                      </div>
                      <div className="field-select">
                        <select name="s">
                          <option selected="selected">Subcategory (optional)</option>
                          <option value="book">Book</option>
                          <option value="crafts">Crafts</option>
                          <option value="design-art">Design &amp; Art</option>
                          <option value="perfomances">Perfomances</option>
                          <option value="technology">Technology</option>
                        </select>
                      </div>
                    </div>
                    <div className="field">
                      <label for="projectlocation">Project Location</label>
                      <input type="text" id="projectlocation" />
                    </div>
                    <div className="field">
                      <label for="funding">Funding Duration</label>
                      <span className="label-desc">
                        Projects with shorter durations have higher success rates. You won’t be able
                        to adjust your duration after you launch.
                      </span>
                      <input type="date" id="funding" value="" />
                    </div>
                    <div className="field">
                      <label for="fundinggoal">Funding Goal</label>
                      <span className="label-desc">
                        Funding on Ideapress is all-or-nothing. It’s okay to raise more than your
                        goal, but if your goal isn’t met, no money will be collected. Your goal
                        should reflect the minimum amount of funds you need to complete your project
                        and send out rewards, and include a buffer for payments processing fees. If
                        your project is successfully funded, the following fees will be collected
                        from your funding total: Ideapress 5% fee, and payment processing fees
                        (between 3% and 5%). If funding isn’t successful, there are no fees.{' '}
                        <Link to="/" className="view-fees">
                          View fees breakdown
                        </Link>
                      </span>
                      <div className="spopup-bg"></div>
                      <div className="fees-popup start-popup">
                        <div className="spopup-title">
                          <h3>Fees</h3>
                          <div className="spopup-close">
                            <span className="ion-ios-close-empty" />
                          </div>
                        </div>
                        <div className="spopup-content">
                          <p>
                            If your project is successfully funded, the following fees will be
                            collected from your funding total: Ideapress 5% fee, and payment
                            processing fees (between 3% and 5%). If funding isn’t successful, there
                            are no fees.
                          </p>
                          <ul>
                            <li>
                              <h4>Ideapress fee</h4>
                              <div className="fee-desc">
                                <p>5% of total funds raised </p>
                              </div>
                            </li>
                            <li>
                              <h4>Payment processing fees</h4>
                              <div className="fee-desc">
                                <p>3% + €0.20 per pledge</p>
                                <p>
                                  Pledges under €10 have a discounted micropledge fee of 5% + €0.05
                                  per pledge
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <input type="text" value="" id="fundinggoal" />
                    </div>
                    <input type="submit" className="btn-primary" value="Save & Continue" />
                  </form>
                  <button type="button" className="btn-primary preview-btn">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Create;
