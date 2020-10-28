import React from 'react';
import { Link } from 'react-router-dom';
import useReadFund from 'src/hook/fund/useReadFund';

const List = () => {
  const { funds, error, loading } = useReadFund();
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
              <div className="field-select">
                <select name="s">
                  <option value="">All Category</option>
                  <option value="">Design & Art</option>
                  <option value="">Book</option>
                  <option value="">Perfomances</option>
                  <option value="">Technology</option>
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
                  <div className="campaign-big-item clearfix">
                    <Link to="/fund/detail" className="campaign-big-image">
                      <img src={require('src/images/placeholder/570x350.png')} alt="" />
                    </Link>
                    <div className="campaign-big-box">
                      <Link to="/fund/detail" className="category">
                        {funds[0].category}
                      </Link>
                      <h3>
                        <Link to="/fund/detail">{funds[0].title}</Link>
                      </h3>
                      <div className="campaign-description">{funds[0].contents}</div>
                      <div className="staff-picks-author">
                        <div className="author-profile">
                          <Link className="author-avatar" to="/">
                            <img src={require('src/images/placeholder/35x35.png')} alt="" />
                          </Link>
                          by{' '}
                          <Link className="author-name" to="/">
                            {funds[0].owner}
                          </Link>
                        </div>
                        <div className="author-address">
                          <span className="ion-location" />
                          {funds[0].country}
                        </div>
                      </div>
                      <div className="process">
                        <div className="raised">
                          <span />
                        </div>
                        <div className="process-info">
                          <div className="process-pledged">
                            <span>${funds[0].pledged}</span>pledged
                          </div>
                          <div className="process-funded">
                            <span>{funds[0].funded}%</span>funded
                          </div>
                          <div className="process-time">
                            <span>{funds[0].backers}</span>backers
                          </div>
                          <div className="process-time">
                            <span>{funds[0].deadline}</span>days ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {funds.map(fund => (
                  <div key={fund.id} className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <Link className="overlay" to="/">
                        <img src={require('src/images/placeholder/370x240.png')} alt="" />
                        <span className="ion-ios-search-strong" />
                      </Link>
                      <div className="campaign-box">
                        <Link to="/fund/detail" className="category">
                          {fund.category}
                        </Link>
                        <h3>
                          <Link to="/fund/detail">{fund.title}</Link>
                        </h3>
                        <div className="campaign-description">{fund.contents}</div>
                        <div className="campaign-author">
                          <Link className="author-icon" to="/">
                            <img src={require('src/images/placeholder/35x35.png')} alt="" />
                          </Link>
                          by{' '}
                          <Link className="author-name" to="/">
                            {fund.owner}
                          </Link>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span />
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>${fund.pledged}</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>{fund.funded}%</span>funded
                            </div>
                            <div className="process-time">
                              <span>{fund.deadline}</span>days ago
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
