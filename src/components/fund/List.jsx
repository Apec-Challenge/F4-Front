import React from 'react';
import { Link } from 'react-router-dom';

const funds = [
  {
    id: 1,
    category: 'Crafts',
    title: 'The Oreous Pillow',
    contents: 'A watch designed to be an heirloom to be passed down to the next generation.',
    owner: 'Sabato Alterio',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 630,
    funded: 26,
    deadline: 2,
  },
  {
    id: 2,
    category: 'Book',
    title: 'The Everlast Notebook',
    contents: `One mdart, reusable notebook to last the rest of your life? That's not magic, that's the Everlast.`,
    owner: 'Samino',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 370,
    funded: 9,
    deadline: 9,
  },
  {
    id: 3,
    category: 'Perfomances',
    title: 'Uncompromising Ski Gear',
    contents: `The Orsden Slope Pants don't compromise delivering performance, fit, and value directly to you`,
    owner: 'Andrew Noah',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 610,
    funded: 73,
    deadline: 14,
  },
  {
    id: 4,
    category: 'Technology',
    title: 'mdart Wallet with Solar Charge',
    contents:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.',
    owner: 'Andrew Noah',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 3670,
    funded: 58,
    deadline: 21,
  },
  {
    id: 5,
    category: 'Technology',
    title: 'Redefine Your VR Experience',
    contents:
      'I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.',
    owner: 'Sabato Alterio',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 1950,
    funded: 70,
    deadline: 23,
  },
  {
    id: 6,
    category: 'Design & Art',
    title: 'Bring back Fun House',
    contents:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    owner: 'Samino',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 3900,
    funded: 69,
    deadline: 33,
  },
  {
    id: 7,
    category: 'Technology',
    title: 'Smart Wallet with Solar Charge',
    contents:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.',
    owner: 'Andrew Noah',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 3670,
    funded: 58,
    deadline: 21,
  },
  {
    id: 8,
    category: 'Technology',
    title: 'Redefine Your VR Experience',
    contents:
      'I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.',
    owner: 'Sabato Alterio',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 1950,
    funded: 70,
    deadline: 23,
  },
  {
    id: 9,
    category: 'Design & Art',
    title: 'Bring back Fun House',
    contents:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    owner: 'Samino',
    thumb: `src/images/placeholder/370x240.png`,
    uThumb: `src/images/placeholder/35x35.png`,
    pledged: 3900,
    funded: 69,
    deadline: 33,
  },
];

const recentFund = {
  category: 'Design & Art',
  title: 'Creative Furniture Designs',
  contents:
    'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.',
  owner: 'Andrew Noah',
  country: 'Melbourne, Victoria, AU',
  pledged: 10000,
  funded: 81,
  backers: 37,
  deadline: 23,
};

const List = () => {
  return (
    <main id="main" className="site-main">
      <div className="page-title background-page">
        <div className="container">
          <h1>Discover projects</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
                <span>/</span>
              </li>
              <li>Layout</li>
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
        <div className="container">
          <div className="campaign-content">
            <div className="row">
              <div className="col-lg-12">
                <div className="campaign-big-item clearfix">
                  <a href="campaign_detail.html" className="campaign-big-image">
                    <img src={require('src/images/placeholder/570x350.png')} alt="" />
                  </a>
                  <div className="campaign-big-box">
                    <Link to="/fund/detail" className="category">
                      {recentFund.category}
                    </Link>
                    <h3>
                      <a href="campaign_detail.html">{recentFund.title}</a>
                    </h3>
                    <div className="campaign-description">{recentFund.contents}</div>
                    <div className="staff-picks-author">
                      <div className="author-profile">
                        <Link className="author-avatar" to="/">
                          <img src={require('src/images/placeholder/35x35.png')} alt="" />
                        </Link>
                        by{' '}
                        <Link className="author-name" to="/">
                          {recentFund.owner}
                        </Link>
                      </div>
                      <div className="author-address">
                        <span className="ion-location" />
                        {recentFund.country}
                      </div>
                    </div>
                    <div className="process">
                      <div className="raised">
                        <span />
                      </div>
                      <div className="process-info">
                        <div className="process-pledged">
                          <span>${recentFund.pledged}</span>pledged
                        </div>
                        <div className="process-funded">
                          <span>{recentFund.funded}%</span>funded
                        </div>
                        <div className="process-time">
                          <span>{recentFund.backers}</span>backers
                        </div>
                        <div className="process-time">
                          <span>{recentFund.deadline}</span>days ago
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
                      <Link to="/" className="category">
                        {funds.category}
                      </Link>
                      <h3>
                        <Link to="/">{fund.title}</Link>
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
      </div>
    </main>
  );
};

export default List;
