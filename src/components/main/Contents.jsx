import React from 'react';
import { Link } from 'react-router-dom';

const categorys = [
  {
    id: 1,
    name: 'Design & Art',
  },
  {
    id: 2,
    name: 'Film Video',
  },
  {
    id: 3,
    name: 'Book',
  },
  {
    id: 4,
    name: 'Performances',
  },
  {
    id: 5,
    name: 'Crafts',
  },
  {
    id: 6,
    name: 'Technology',
  },
  {
    id: 7,
    name: 'Food',
  },
  {
    id: 8,
    name: 'Game',
  },
];
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
];
const banner = {
  category: 'Design & Art',
  title: 'Bring new ideas to life, anywhere',
  contents:
    'Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu teus.',
  owner: 'Samino',
  thumb: `src/images/placeholder/370x240.png`,
  uThumb: `src/images/placeholder/35x35.png`,
  pledged: 46.0,
  funded: 46,
  deadline: 21,
  backers: 32,
};

const Contents = () => {
  return (
    <main id="main" className="site-main">
      <div className="sideshow">
        <img src={require('src/images/placeholder/1920x680.png')} alt="" />
        <div className="container">
          <div className="sideshow-content">
            <h1 className="wow fadeInUp" data-wow-delay=".2s">
              {banner.title}
            </h1>
            <div className="sideshow-description wow fadeInUp" data-wow-delay=".1s">
              {banner.contents}
            </div>
            <div className="process wow fadeInUp" data-scroll-nav="1">
              <div className="raised">
                <span></span>
              </div>
              <div className="process-info">
                <div className="process-funded">
                  <span>{banner.funded}%</span>funded
                </div>
                <div className="process-pledged">
                  <span>${banner.pledged}</span>pledged
                </div>
                <div className="process-backers">
                  <span>{banner.backers}</span>backers
                </div>
                <div className="process-time">
                  <span>{banner.deadline}</span>days ago
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
      <div className="explore">
        <div className="container">
          <h2 className="title">Explore Ideas</h2>
          <div className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
          <div className="explore-content">
            <div className="row">
              {categorys.map(category => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="explore-item">
                    <Link className="explore-overlay" to="/">
                      <img src={require('src/images/placeholder/270x180.png')} alt="" />
                      <span>{category.name}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="latest campaign">
        <div className="container">
          <h2 className="title">Latest Campaigns</h2>
          <div className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
          <div className="campaign-content">
            <div className="row">
              {funds.map(fund => (
                <div className="col-lg-4 col-sm-6">
                  <div className="campaign-item">
                    <Link className="overlay" to="/">
                      <img src={require('src/images/placeholder/370x240.png')} alt="" />
                      <span className="ion-ios-search-strong"></span>
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
                          <span></span>
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
              View all Campaigns
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contents;
