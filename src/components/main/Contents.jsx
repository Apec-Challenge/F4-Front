import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useReadFund from 'src/hook/fund/useReadFund';
import useReadPlace from 'src/hook/place/useReadPlace';
import Raised from 'src/components/common/Raised';

const Contents = () => {
  const fetchFund = useReadFund();
  const fetchPlace = useReadPlace();
  const currentDate = moment().toISOString();
  return (
    <main id="main" className="site-main">
      {fetchFund.loading && 'Loading...'}
      {!fetchFund.loading &&
        fetchFund.funds.slice(0, 1).map(fund => (
          <div key={fund.id} className="sideshow">
            <img src={fund.thumbnail_image} alt="" />
            <div className="container">
              <div className="sideshow-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  {fund.title}
                </h1>
                <div className="sideshow-description wow fadeInUp" data-wow-delay=".1s">
                  {fund.description}
                </div>
                <div className="process wow fadeInUp" data-scroll-nav="1">
                  <Raised funded={(fund.funding_amount / fund.funding_goal_amount) * 100} />
                  <div className="process-info">
                    <div className="process-pledged">
                      <span>${fund.funding_goal_amount}</span>funding goal
                    </div>
                    <div className="process-funded">
                      <span>
                        {fund.funding_amount === 0
                          ? 0
                          : parseInt((fund.funding_amount / fund.funding_goal_amount) * 100)}
                        %
                      </span>
                      funded
                    </div>
                    <div className="process-backers">
                      <span>{fund.backed_list.length}</span>backers
                    </div>
                    <div className="process-time">
                      <span>{moment(fund.ended_at).diff(currentDate, 'days')}</span>days ago
                    </div>
                  </div>
                </div>
                <div className="button wow fadeInUp" data-wow-delay="0.3s">
                  <Link to={`/fund/detail/${fund.id}`} className="btn-secondary">
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
            It's safe. It's clean. Check out the various places registered here.
          </div>
          {fetchPlace.loading && 'Loading...'}
          {!fetchPlace.loading && fetchPlace.places && (
            <div className="row">
              <div className="col-lg-12 main-content">
                <div className="grid-product">
                  {fetchPlace.places.slice(0, 4).map(place => (
                    <div key={place.place_id} className="product">
                      <Link to={`/place/detail/${place.place_id}`}>
                        <img src={place.place_image} alt="" />
                      </Link>
                      <div className="product-info">
                        <h3 className="product-title">
                          <Link to={`/place/detail/${place.place_id}`}>{place.title}</Link>
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
          <h2 className="title">Latest Funding Campaigns</h2>
          <div className="description">Check out the newly registered funding campaign.</div>
          <div className="campaign-content">
            {fetchFund.loading && 'Loading...'}
            {fetchFund.funds && !fetchFund.loading && (
              <div className="row">
                {fetchFund.funds.slice(1, 7).map((fund, index) => (
                  <div key={fund.id} className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <div className="thumbnail">
                        <Link className="overlay" to={`/fund/detail/${index}`}>
                          <img src={fund.thumbnail_image} alt="" />
                          <i className="fa fa-search" aria-hidden="true" />
                        </Link>
                      </div>
                      <div className="campaign-box">
                        <h3>
                          <Link to="/">{fund.title}</Link>
                        </h3>
                        <div className="campaign-description">{fund.description}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div className="campaign-author">
                            <Link className="author-icon" to="/">
                              <img src={require('src/images/user.png')} alt="" />
                            </Link>
                            by
                            <Link className="author-name" to="/">
                              {fund.owner_username}
                            </Link>
                          </div>
                          <div
                            className="author-likes"
                            style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}
                          >
                            <img
                              src={require('src/images/thumb-up.png')}
                              alt=""
                              style={{ marginRight: '10px', height: '15px', width: '15px' }}
                            />
                            {fund.total_likes}
                          </div>
                        </div>
                        <div className="process">
                          <Raised funded={(fund.funding_amount / fund.funding_goal_amount) * 100} />
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>${fund.funding_goal_amount}</span>funding goal
                            </div>
                            <div className="process-funded">
                              <span>
                                {fund.funding_amount === 0
                                  ? 0
                                  : parseInt(
                                      (fund.funding_amount / fund.funding_goal_amount) * 100
                                    )}
                                %
                              </span>
                              funded
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
              View all campaigns
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contents;
