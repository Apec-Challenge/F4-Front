import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useReadFund from 'src/hook/fund/useReadFund';
import useReadPlace from 'src/hook/place/useReadPlace';

const Contents = () => {
  const fetchFund = useReadFund();
  const fetchPlace = useReadPlace();
  const currentDate = moment().toISOString();
  return (
    <main id="main" className="site-main">
      {fetchFund.loading && '로딩중...'}
      {!fetchFund.loading &&
        fetchFund.funds.splice(0, 1).map(fund => (
          <div key={fund.id} className="sideshow">
            <img src={require('src/images/placeholder/1920x680.png')} alt="" />
            <div className="container">
              <div className="sideshow-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  {fund.title}
                </h1>
                <div className="sideshow-description wow fadeInUp" data-wow-delay=".1s">
                  {fund.content}
                </div>
                <div className="process wow fadeInUp" data-scroll-nav="1">
                  <div className="raised">
                    <span />
                  </div>
                  <div className="process-info">
                    <div className="process-funded">
                      <span>
                        {' '}
                        {fund.funding_amount === 0
                          ? (fund.funding_amount / fund.funding_goal_amount) * 100
                          : 0}
                        %
                      </span>
                      funded
                    </div>
                    <div className="process-pledged">
                      <span>${fund.funding_goal_amount}</span>pledged
                    </div>
                    <div className="process-backers">
                      <span>{fund.backers}</span>backers
                    </div>
                    <div className="process-time">
                      <span>{moment(fund.ended_at).diff(currentDate, 'days')}</span>days ago
                    </div>
                  </div>
                </div>
                <div className="button wow fadeInUp" data-wow-delay="0.3s">
                  <Link to="/" className="btn-secondary">
                    See Campaign
                  </Link>
                  <Link to="/" className="btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="latest places">
        <div className="container">
          <h2 className="title">Latest Places</h2>
          <div className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
          {fetchPlace.loading && '로딩중...'}
          {!fetchPlace.loading && fetchPlace.places && (
            <div className="row">
              <div className="col-lg-12 main-content">
                <div className="grid-product">
                  {fetchPlace.places.slice(0, 4).map(place => (
                    <div key={place.id} className="product">
                      <Link to="/place/detail">
                        <img src={require('src/images/placeholder/270x180.png')} alt="" />
                      </Link>
                      <div className="product-info">
                        <h3 className="product-title">
                          <Link to="/place/detail">{place.title}</Link>
                        </h3>
                        <p className="product-price">{place.description}</p>
                        <p className="product-price">{place.business_hour}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="latest-button">
          <Link to="/place/list" className="btn-primary">
            View all Places
          </Link>
        </div>
      </div>
      <div className="latest campaign">
        <div className="container">
          <h2 className="title">Latest Fundings</h2>
          <div className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
          <div className="campaign-content">
            {fetchFund.loading && '로딩중...'}
            {fetchFund.funds && !fetchFund.loading && (
              <div className="row">
                {fetchFund.funds.slice(0, 6).map(fund => (
                  <div key={fund.id} className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <Link className="overlay" to="/fund/detail">
                        <img src={require('src/images/placeholder/370x240.png')} alt="" />
                        <i className="fa fa-search" aria-hidden="true" />
                      </Link>
                      <div className="campaign-box">
                        <h3>
                          <Link to="/">{fund.title}</Link>
                        </h3>
                        <div className="campaign-description">{fund.content}</div>
                        <div className="campaign-author">
                          <Link className="author-icon" to="/">
                            <img src={require('src/images/placeholder/35x35.png')} alt="" />
                          </Link>
                          by{' '}
                          <Link className="author-name" to="/">
                            {fund.user}
                          </Link>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span />
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>${fund.funding_goal_amount}</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>
                                {fund.funding_amount === 0
                                  ? (fund.funding_amount / fund.funding_goal_amount) * 100
                                  : 0}
                                %
                              </span>
                            </div>
                            <div className="process-time">
                              <span>{moment(fund.ended_at).diff(currentDate, 'days')}</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="latest-button">
            <Link to="/fund/list" className="btn-primary">
              View all Fundings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contents;
