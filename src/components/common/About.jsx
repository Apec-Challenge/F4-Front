import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main id="main" className="site-main">
      <section className="top-site">
        <div className="container">
          <h1>
							Travel makes one modest. You see what a tiny place you occupy in the world.
							<small className="autherN">&nbsp;&nbsp;<i>Gustav Flaubert</i></small>
          </h1>
        </div>
      </section>
      <div className="container">
        <div className="video">
          {/*
          <div className="video-wrapper">
            <iframe height="315" src="https://www.youtube.com/embed/bEusrD8g-dM" allowFullScreen />
          </div>
          */}
        </div>
        <section className="statics section">
          <h2 className="title">We are make a future happy travel.</h2>
          <div className="description">
            <p>
							COVID-19 will soon pass us like a summer cold. We give happy memories to all of you who have worked hard to create a world without COVID-19.
						</p>
          </div>
          <div className="statics-content">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-6">
                <div className="statics-item">
                  <h3>3,623 places</h3>
                  <div className="statics-item-desc">
                    <p>
											Many places prepared for raising money
										</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-6">
                <div className="statics-item">
                  <h3>1.5 Million SGD</h3>
                  <div className="statics-item-desc">
                    <p>Amount Funded So far</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-6">
                <div className="statics-item">
                  <h3>32 Countries</h3>
                  <div className="statics-item-desc">
                    <p>The various countries with us</p>
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
