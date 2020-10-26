import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main id="main" className="site-main">
      <section className="top-site">
        <div className="container">
          <h1>
            Our mission is to empower people to unite around ideas that matter to them and together
            make those ideas come to life.
          </h1>
        </div>
      </section>
      <div className="container">
        <div className="video">
          <div className="video-wrapper">
            <iframe height="315" src="https://www.youtube.com/embed/bEusrD8g-dM" allowfullscreen />
          </div>
        </div>
        <section className="statics section">
          <h2 className="title">We are changing the way of making things possible.</h2>
          <div className="description">
            <p>
              Raise money for ​over 1.5 million charities with personal fundraisers, events, races
              and corporate philanthropy.
            </p>
          </div>
          <div className="statics-content">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="statics-item">
                  <h3>1.5 Milion</h3>
                  <div className="statics-item-desc">
                    <p>Total raised across all projects, from programs to design.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="statics-item">
                  <h3>2500 Individual </h3>
                  <div className="statics-item-desc">
                    <p>Total raised across all projects, from programs to design.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="statics-item">
                  <h3>223 Countries</h3>
                  <div className="statics-item-desc">
                    <p>And territories are home to IdeaPress campaigns</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="statics-item">
                  <h3>68% Funded</h3>
                  <div className="statics-item-desc">
                    <p>That exceed their goals are run by women</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team section">
          <h2 className="title">Meet Our super Heros</h2>
          <div className="description">
            <p>
              At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.
            </p>
          </div>
          <div className="team-content">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="team-item">
                  <div className="avatar">
                    <img src={require('src/images/placeholder/270x340.png')} alt="" />
                  </div>
                  <div className="team-info">
                    <ul className="socials">
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-google-plus" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                    <h3 className="team-name">Marie J. Smith</h3>
                    <span className="team-job">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="team-item">
                  <div className="avatar">
                    <img src={require('src/images/placeholder/270x340.png')} alt="" />
                  </div>
                  <div className="team-info">
                    <ul className="socials">
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-google-plus" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                    <h3 className="team-name">Billy S. Tietjen</h3>
                    <span className="team-job">Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="team-item">
                  <div className="avatar">
                    <img src={require('src/images/placeholder/270x340.png')} alt="" />
                  </div>
                  <div className="team-info">
                    <ul className="socials">
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-google-plus" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                    <h3 className="team-name">Edward S. Agosto</h3>
                    <span className="team-job">Digital Marketer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="team-item">
                  <div className="avatar">
                    <img src={require('src/images/placeholder/270x340.png')} alt="" />
                  </div>
                  <div className="team-info">
                    <ul className="socials">
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-google-plus" aria-hidden="true" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                    <h3 className="team-name">Clara C. Vinson</h3>
                    <span className="team-job">Account Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
