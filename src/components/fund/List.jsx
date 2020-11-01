import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useReadFund from 'src/hook/fund/useReadFund';

const List = () => {
  const { funds, error, loading } = useReadFund();
  const currentDate = moment().toISOString();
  return (
    <main id="main" className="site-main">
      <div className="page-title background-page">
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
      <div className="campaigns-action clearfix">
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
      </div>
      <div className="campaigns">
        {loading && '로딩중..'}
        {!loading && funds && (
          <div className="container">
            <div className="campaign-content">
              <div className="row">
                <div className="col-lg-12">
                  {funds.slice(0, 1).map(fund => (
                    <div key={fund.id} className="campaign-big-item clearfix">
                      <Link to={`/fund/detail/${fund.id}`} className="campaign-big-image">
                        <img src={fund.thumbnail_image} alt="" />
                      </Link>
                      <div className="campaign-big-box">
                        <h3>
                          <Link to={`/fund/detail/${fund.id}`}>{fund.title}</Link>
                        </h3>
                        <div className="campaign-description">{fund.contents}</div>
                        <div className="staff-picks-author">
                          <div className="author-profile">
                            <Link className="author-avatar" to="/">
                              <img src={require('src/images/user.png')} alt="" />
                            </Link>
                            by{' '}
                            <Link className="author-name" to="/">
                              {fund.user}
                            </Link>
                          </div>
                          <div className="author-address">
                            <span className="ion-location" />
                            {fund.place}
                          </div>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span />
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>${fund.funding_goal_amount}</span>funding goal
                            </div>
                            <div className="process-funded">
                              <span>
                                {fund.funding_amount === 0
                                  ? (fund.funding_amount / fund.funding_goal_amount) * 100
                                  : 0}
                                %
                              </span>
                              funded
                            </div>
                            <div className="process-time">
                              <span>{fund.backed_list}</span>backers
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
                  <div className="col-lg-4 col-sm-6 col-6">
                    <div key={fund.id} className="campaign-item">
                      <Link className="overlay" to={`/fund/detail/${fund.id}`}>
                        <img src={fund.thumbnail_image} alt="" />
                        <i className="fa fa-search" aria-hidden="true" />
                      </Link>
                      <div className="campaign-box">
                        <h3>
                          <Link to={`/fund/detail/${fund.id}`}>{fund.title}</Link>
                        </h3>
                        <div className="campaign-description">{fund.content}</div>
                        <div className="campaign-author">
                          <Link className="author-icon" to="/">
                            <img src={require('src/images/user.png')} alt="" />
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
                              <span>${fund.funding_goal_amount}</span>funding goal
                            </div>
                            <div className="process-funded">
                              <span>
                                {fund.funding_amount === 0
                                  ? (fund.funding_amount / fund.funding_goal_amount) * 100
                                  : 0}
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
            <div className="latest-button">
              <Link to="/" className="btn-primary">
                Load more
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default List;
