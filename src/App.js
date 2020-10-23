import React from 'react';

const App = () => {
  return (
    <div className="home">
      <div id="wrapper">
        <header id="header" className="site-header">
          <div className="container">
            <div className="site-brand">
              <a href="index.html">
                <img src={require('./assets/images/assets/logo.png')} alt="." />
              </a>
            </div>
            <div className="right-header">
              <nav className="main-menu">
                <button className="c-hamburger c-hamburger--htx">
                  <span></span>
                </button>
                <ul>
                  <li>
                    <a href="#">
                      Home<i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home v1</a>
                      </li>
                      <li>
                        <a href="index_2.html">Home v2</a>
                      </li>
                      <li>
                        <a href="index_3.html">Home v3</a>
                      </li>
                      <li>
                        <a href="index_gradient.html">Home Gradient</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Explore<i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="explore_layout_one.html">Explore Layout One</a>
                      </li>
                      <li>
                        <a href="explore_layout_two.html">Explore Layout Two</a>
                      </li>
                      <li>
                        <a href="explore_layout_three.html">Explore Layout Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Start a Campaigns<i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="create_a_campaign.html">Create a campaign</a>
                      </li>
                      <li>
                        <a href="update_a_campaign.html">Update a campaign</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Pages<i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="coming_soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="about_us.html">About Us</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="campaign_detail.html">Campaign details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Blog<i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog_grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog_list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog_list_sidebar.html">Blog Grid Sidebar</a>
                      </li>
                      <li>
                        <a href="blog_details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Shop<i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-grid.html">Shop Grid</a>
                      </li>
                      <li>
                        <a href="shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact_us.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      Account<i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="account_my_campaigns.html">My Campaigns</a>
                      </li>
                      <li>
                        <a href="account_pledges_received.html">Pledges Received</a>
                      </li>
                      <li>
                        <a href="account_backed_campaigns.html">Backed Campaigns</a>
                      </li>
                      <li>
                        <a href="account_rewards.html">Rewards</a>
                      </li>
                      <li>
                        <a href="account_payments.html">Payments</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="search-icon">
                <a href="#" className="ion-ios-search-strong"></a>
                <div className="form-search"></div>
                <form action="#" method="POST" id="searchForm">
                  <input type="text" value="" name="search" placeholder="Search..." />
                  <button type="submit" value="">
                    <span className="ion-ios-search-strong"></span>
                  </button>
                </form>
              </div>

              <div className="login login-button">
                <a href="login.html" className="btn-primary">
                  Login
                </a>
              </div>
            </div>
          </div>
        </header>

        <main id="main" className="site-main">
          <div className="sideshow">
            <div className="container">
              <div className="sideshow-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Bring new ideas to life, anywhere
                </h1>
                <div className="sideshow-description wow fadeInUp" data-wow-delay=".1s">
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
                  auctor neque eu teus.
                </div>
                <div className="process wow fadeInUp" data-scroll-nav="1">
                  <div className="raised">
                    <span></span>
                  </div>
                  <div className="process-info">
                    <div className="process-funded">
                      <span>46%</span>funded
                    </div>
                    <div className="process-pledged">
                      <span>$46.000</span>pledged
                    </div>
                    <div className="process-backers">
                      <span>32</span>backers
                    </div>
                    <div className="process-time">
                      <span>21</span>days ago
                    </div>
                  </div>
                </div>
                <div className="button wow fadeInUp" data-wow-delay="0.3s">
                  <a href="#" className="btn-secondary">
                    See Campaign
                  </a>
                  <a href="#" className="btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="popular campaign">
            <div className="container">
              <h2 className="title">What's Popular</h2>
              <div className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </div>
              <div className="campaign-content">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Design &amp; Art
                        </a>
                        <h3>
                          <a href="campaign_detail.html">Poster MockUp Design</a>
                        </h3>
                        <div className="campaign-description">
                          However hard he threw himself onto his right, he always rolled back to
                          where he was.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Andrew Noah
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$610</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>73%</span>funded
                            </div>
                            <div className="process-time">
                              <span>25</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Book
                        </a>
                        <h3>
                          <a href="campaign_detail.html">Svalbard, an arcticficial life</a>
                        </h3>
                        <div className="campaign-description">
                          One morning, when Gregor Samsa woke from troubled dreams.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Samino
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$3900</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>69%</span>funded
                            </div>
                            <div className="process-time">
                              <span>17</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Film &amp; Video
                        </a>
                        <h3>
                          <a href="campaign_detail.html">Interestingly Unique Project</a>
                        </h3>
                        <div className="campaign-description">
                          However hard he threw himself onto his right, he always rolled back to
                          where he was.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Sabato Alterio
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$1200</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>110%</span>funded
                            </div>
                            <div className="process-time">
                              <span>23</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Design &amp; Art</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Film &amp; Video</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Book</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Performances</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Crafts</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Technology</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Food</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="explore-item">
                      <a className="explore-overlay" href="#">
                        <img src={require('./assets/images/placeholder/270x180.png')} alt="." />
                        <span>Game</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="staff-picks">
            <div className="container">
              <div className="border-title">
                <h2 className="title left-title">Staff Picks</h2>
                <div className="description left-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </div>
              <div className="staff-picks-content">
                <div className="staff-picks-slider slider-controls-top owl-carousel">
                  <div className="staff-picks-item clearfix">
                    <a className="staff-picks-image" href="campaign_detail.html">
                      <img src={require('./assets/images/placeholder/570x350.png')} alt="." />
                    </a>
                    <div className="staff-picks-item-content staff-picks-box">
                      <a href="#" className="category">
                        Design &amp; Art
                      </a>
                      <h3>
                        <a href="campaign_detail.html">Creative Furniture Designs</a>
                      </h3>
                      <div className="staff-picks-description">
                        He lay on his armour-like back, and if he lifted his head a little he could
                        see his brown belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly able to cover it and seemed ready to slide
                        off any moment.
                      </div>
                      <div className="staff-picks-author">
                        <div className="author-profile">
                          <a className="author-avatar" href="#">
                            <img src={require('./assets/images/placeholder/40x40.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Andrew Noah
                          </a>
                        </div>
                        <div className="author-address">
                          <span className="ion-location"></span>Melbourne, Victoria, AU
                        </div>
                      </div>
                      <div className="process">
                        <div className="raised">
                          <span></span>
                        </div>
                        <div className="process-info">
                          <div className="process-pledged">
                            <span>$10000</span>pledged
                          </div>
                          <div className="process-funded">
                            <span>81%</span>funded
                          </div>
                          <div className="process-time">
                            <span>37</span>backers
                          </div>
                          <div className="process-time">
                            <span>23</span>days ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="staff-picks-item clearfix">
                    <a className="staff-picks-image" href="campaign_detail.html">
                      <img src={require('./assets/images/placeholder/570x350.png')} alt="." />
                    </a>
                    <div className="staff-picks-item-content staff-picks-box">
                      <a href="#" className="category">
                        Design &amp; Art
                      </a>
                      <h3>
                        <a href="campaign_detail.html">Creative Furniture Designs</a>
                      </h3>
                      <div className="staff-picks-description">
                        He lay on his armour-like back, and if he lifted his head a little he could
                        see his brown belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly able to cover it and seemed ready to slide
                        off any moment.
                      </div>
                      <div className="staff-picks-author">
                        <div className="author-profile">
                          <a className="author-avatar" href="#">
                            <img src={require('./assets/images/placeholder/40x40.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Andrew Noah
                          </a>
                        </div>
                        <div className="author-address">
                          <span className="ion-location"></span>Melbourne, Victoria, AU
                        </div>
                      </div>
                      <div className="process">
                        <div className="raised">
                          <span></span>
                        </div>
                        <div className="process-info">
                          <div className="process-pledged">
                            <span>$10000</span>pledged
                          </div>
                          <div className="process-funded">
                            <span>81%</span>funded
                          </div>
                          <div className="process-time">
                            <span>37</span>backers
                          </div>
                          <div className="process-time">
                            <span>23</span>days ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Crafts
                        </a>
                        <h3>
                          <a href="campaign_detail.html">The Oreous Pillow</a>
                        </h3>
                        <div className="campaign-description">
                          A watch designed to be an heirloom to be passed down to the next
                          generation.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Sabato Alterio
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$630</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>26%</span>funded
                            </div>
                            <div className="process-time">
                              <span>2</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Book
                        </a>
                        <h3>
                          <a href="campaign_detail.html">The Everlast Notebook</a>
                        </h3>
                        <div className="campaign-description">
                          One mdart, reusable notebook to last the rest of your life? That'[s] not
                          magic, that's the Everlast.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Samino
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$370</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>9%</span>funded
                            </div>
                            <div className="process-time">
                              <span>9</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Perfomances
                        </a>
                        <h3>
                          <a href="campaign_detail.html">Uncompromising Ski Gear</a>
                        </h3>
                        <div className="campaign-description">
                          The Orsden Slope Pants don't compromise delivering performance, fit, and
                          value directly to you
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Andrew Noah
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$610</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>73%</span>funded
                            </div>
                            <div className="process-time">
                              <span>14</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Technology
                        </a>
                        <h3>
                          <a href="campaign_detail.html">mdart Wallet with Solar Charge</a>
                        </h3>
                        <div className="campaign-description">
                          A wonderful serenity has taken possession of my entire soul, like these
                          sweet mornings.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Andrew Noah
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$3670</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>58%</span>funded
                            </div>
                            <div className="process-time">
                              <span>21</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Technology
                        </a>
                        <h3>
                          <a href="campaign_detail.html">Redefine Your VR Experience</a>
                        </h3>
                        <div className="campaign-description">
                          I enjoy with my whole heart. I am alone, and feel the charm of existence
                          in this spot.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Sabato Alterio
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$1950</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>70%</span>funded
                            </div>
                            <div className="process-time">
                              <span>23</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="campaign-item">
                      <a className="overlay" href="campaign_detail.html">
                        <img src={require('./assets/images/placeholder/370x240.png')} alt="." />
                        <span className="ion-ios-search-strong"></span>
                      </a>
                      <div className="campaign-box">
                        <a href="#" className="category">
                          Design &amp; Art
                        </a>
                        <h3>
                          <a href="campaign_detail.html">Bring back Fun House</a>
                        </h3>
                        <div className="campaign-description">
                          Far far away, behind the word mountains, far from the countries Vokalia
                          and Consonantia.
                        </div>
                        <div className="campaign-author">
                          <a className="author-icon" href="#">
                            <img src={require('./assets/images/placeholder/35x35.png')} alt="." />
                          </a>
                          by{' '}
                          <a className="author-name" href="#">
                            Samino
                          </a>
                        </div>
                        <div className="process">
                          <div className="raised">
                            <span></span>
                          </div>
                          <div className="process-info">
                            <div className="process-pledged">
                              <span>$3900</span>pledged
                            </div>
                            <div className="process-funded">
                              <span>69%</span>funded
                            </div>
                            <div className="process-time">
                              <span>33</span>days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-button">
                <a href="#" className="btn-primary">
                  View all Campaigns
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer id="footer" className="site-footer">
          <div className="footer-copyright">
            <div className="container">
              <p className="copyright">2018 by ideapress. All Rights Reserved.</p>
              <a href="#" className="back-top">
                Back to top<span className="ion-android-arrow-up"></span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
