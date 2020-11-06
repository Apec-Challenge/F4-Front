import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useReadFund from 'src/hook/fund/useReadFund';
import Raised from 'src/components/common/Raised';

const List = () => {
  const { funds, loading } = useReadFund();
  const currentDate = moment().toISOString();
  return (
    <main id="main" className="site-main">
      <div className="page-title background-page">
        <img
          src="https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
          style={{ height: '220px', width: '100%' }}
        />
        <div className="container">
          <h1>Funding List</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Funding</Link>
                <span>/</span>
              </li>
              <li>List</li>
            </ul>
          </div>
        </div>
      </div>
      {/* {      <div className="campaigns-action clearfix">
        <div className="container">
          <div className="sort">
            <span>Sort by:</span>
            <ul>
              <li className="active">
                <Link to="/">Recent Project</Link>
              </li>
              <li>
                <Link to="/">Most Project</Link>
              </li>
            </ul>
          </div>
          <div className="filter">
            <span>Filter by:</span>
            <form action="#">
              <div className="field-select">
                <select name="s">
                  <option value="">All Stages</option>
                  <option value="">Pending</option>
                  <option value="">Cancel</option>
                  <option value="">Completed</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>} */}
      <div className="campaigns">
        {loading && 'loading..'}
        {!loading && funds && (
          <div className="container">
            <div className="campaign-content">
              <div className="row">
                <div className="col-lg-12">
                  {funds.slice(0, 1).map(fund => (
                    <div key={fund.id} className="campaign-big-item clearfix">
                      <div className="thumbnail">
                        <Link to={`/fund/detail/${fund.id}`} className="campaign-big-image">
                          <img src={fund.thumbnail_image} alt="" />
                        </Link>
                      </div>
                      <div className="campaign-big-box">
                        <h3>
                          <Link to={`/fund/detail/${fund.id}`}>{fund.title}</Link>
                        </h3>
                        <div className="campaign-description">{fund.description}</div>
                        <div
                          className="staff-picks-author"
                          style={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                          <div className="author-profile">
                            <Link className="author-avatar" to="/">
                              <img src={require('src/images/user.png')} alt="" />
                            </Link>
                            by
                            <Link className="author-name" to="/">
                              {fund.owner_username}
                            </Link>
                          </div>
                          <div
                            className="author-likes"
                            style={{ marginLeft: '300px', display: 'flex', alignItems: 'center' }}
                          >
                            <img
                              src={require('src/images/thumb-up.png')}
                              alt=""
                              style={{ marginRight: '10px', height: '15px', width: '15px' }}
                            />
                            {fund.total_likes}
                          </div>
                        </div>
                        <div className="author-address">
                          <span className="ion-location" />
                          {fund.place.address}
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
                              <span>{fund.backed_list.length}</span>backers
                            </div>
                            <div className="process-time">
                              <span>{moment(fund.ended_at).diff(currentDate, 'days')}</span>
                              days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {funds.slice(1).map(fund => (
                  <div key={fund.id} className="col-lg-4 col-sm-6 col-6">
                    <div className="campaign-item">
                      <div className="thumbnail">
                        <Link className="overlay" to={`/fund/detail/${fund.id}`}>
                          <img src={fund.thumbnail_image} alt="" />
                          <i className="fa fa-search" aria-hidden="true" />
                        </Link>
                      </div>
                      <div className="campaign-box">
                        <h3>
                          <Link to={`/fund/detail/${fund.id}`}>{fund.title}</Link>
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
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default List;
