import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <main id="main" className="site-main">
      <div className="page-title background-cart">
        <div className="container">
          <h1>Live Work by MSDS Studio</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
                <span>/</span>
              </li>
              <li>
                Shop<span>/</span>
              </li>
              <li>Live Work by MSDS Studio</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 main-content">
            <div className="shop-details">
              <div className="shop-details-content">
                <article className="post">
                  <span>Creative Furniture</span>
                  <h2>Live Work by MSDS Studio</h2>
                  <div className="shop-detail-img">
                    <img src={require('src/images/placeholder/710x460.png')} alt="" />
                  </div>
                  <h3>Descriptions</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ut! Tenetur
                    explicabo laudantium fugit pariatur sunt odio maxime, sint cum, doloribus
                    libero.
                  </p>
                  <p>
                    Laboriosam dolor quaerat autem hic atque quia omnis minus, eum delectus, vitae
                    optio asperiores nulla dolorem quo impedit doloribus ullam dignissimos commodi
                    sint perferendis molestias totam recusandae itaque eius.
                  </p>
                  <p>
                    Tenetur enim aut rerum quis nihil, voluptatem quo officia sint molestiae sequi.
                    Illum repellat nam reprehenderit iusto. Cupiditate neque natus voluptatibus
                    recusandae veniam animi illo beatae explicabo accusamus, perspiciatis totam
                    numquam unde dolor quos, laboriosam minus qui in, quasi nam distinctio voluptas
                    omnis sed eligendi autem nulla!
                  </p>
                  <div className="reviews">
                    <h3>Reviews (0)</h3>
                    <form action="#" method="POST" id="shopdetailsForm" className="clearfix">
                      <div className="field">
                        <textarea rows="8" placeholder="Your review" />
                      </div>
                      <div className="field clearfix">
                        <div className="align-left">
                          <input type="text" value="" name="s" placeholder="Your Name" />
                        </div>
                        <div className="align-right">
                          <input type="text" value="" name="s" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="reviews-vote clearfix">
                        <div className="vote">
                          <span>Your Rating</span>
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-star" aria-hidden="true" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-star" aria-hidden="true" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-star" aria-hidden="true" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-star" aria-hidden="true" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-star" aria-hidden="true" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <button type="submit" value="Send Review" className="btn-primary">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="col-lg-4 sidebar">
            <aside className="widget widget-action">
              <h3 className="widget-title">$55.00</h3>
              <div className="widget-content">
                <div className="action-desc">
                  <p>
                    Simple, adjustable, portable - standing desks that transform the way you work
                  </p>
                </div>
                <button type="submit" value="" className="btn-primary">
                  <span className="ion-bag" />
                  Add to card
                </button>
              </div>
            </aside>
            <aside className="widget widget-share">
              <h3 className="widget-title">Share this</h3>
              <div className="widget-content">
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-google" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-vk" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
