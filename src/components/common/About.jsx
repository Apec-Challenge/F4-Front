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
							COVID-19는 여름 감기처럼 곧 우리를 지나갈 겁니다. COVID-19 없는 세상을 만들기 위해 노력한 여러분들께 행복한 추억을 드립니다.</p>
          </div>
          <div className="statics-content">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="statics-item">
                  <h3>3,623 places</h3>
                  <div className="statics-item-desc">
                    <p>모금을 위해 준비된 많은 장소들</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="statics-item">
                  <h3>1.5 Million </h3>
                  <div className="statics-item-desc">
                    <p>지금까지 모금된 금액</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="statics-item">
                  <h3>32 Countries</h3>
                  <div className="statics-item-desc">
                    <p>함께하는 다양한 국가들</p>
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
      </div>
    </main>
  );
};

export default About;
