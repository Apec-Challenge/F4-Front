import React from 'react';
import { Link } from 'react-router-dom';
import useReadDetailPlace from 'src/hook/place/useReadDetailPlace';

const Detail = ({ place_id }) => {
  const { place, error, loading } = useReadDetailPlace({ place_id });
  return (
    <main id="main" className="site-main">
      <div className="page-title background-cart">
        {!loading && place && (
          <div className="container">
            <h1>{place.title}</h1>
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link to="/place/list">Place</Link>
                  <span>/</span>
                </li>
                <li>
                  Detail<span>/</span>
                </li>
                <li>{place.title}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 main-content">
            {!loading && place && (
              <div className="shop-details">
                <div className="shop-details-content">
                  <article className="post">
                    <span>Creative Furniture</span>
                    <h2>{place.title}</h2>
                    <div className="shop-detail-img">
                      <img src={place.place_image} alt="" />
                    </div>
                    <h3>Descriptions</h3>
                    <p>{place.description}</p>
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
            )}
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
