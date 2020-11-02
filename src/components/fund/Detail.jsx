import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useReadDetailFund from 'src/hook/fund/useReadDetailFund';
import Raised from 'src/components/common/Raised';

const Detail = ({ fund_id }) => {
  const { fund, error, loading } = useReadDetailFund({ fund_id });
  const currentDate = moment().toISOString();
  return (
    <div className="campaign-detail">
      <main id="main" className="site-main">
        {!loading && fund && (
          <div className="page-title background-campaign">
            {fund.map(f => (
              <div key={f.id} className="container">
                <h1>{f.title}</h1>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/fund/list">Funding</Link>
                      <span>/</span>
                    </li>
                    <li>
                      Detail<span>/</span>
                    </li>
                    <li>{f.title}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="campaign-content">
          <div className="container">
            {!loading && fund && (
              <div className="campaign">
                {fund.map(f => (
                  <div className="campaign-item clearfix">
                    <div className="campaign-image">
                      <div className="item">
                        <img src={f.thumbnail_image} alt="" />
                      </div>
                    </div>
                    <div className="campaign-box">
                      <h3>{f.title}</h3>
                      <div className="campaign-description">
                        <p>{f.description}</p>
                      </div>
                      <div className="campaign-author clearfix">
                        <div className="author-profile">
                          <Link className="author-icon" to="/">
                            <img src={require('src/images/user.png')} alt="" />
                          </Link>
                          by
                          <Link className="author-name" to="/">
                            {f.user}
                          </Link>
                        </div>
                        <div className="author-address">
                          <span className="ion-location" />
                          Melbourne, Victoria, AU
                        </div>
                      </div>
                      <div className="process">
                        <Raised funded={(f.funding_amount / f.funding_goal_amount) * 100} />
                        <div className="process-info">
                          <div className="process-pledged">
                            <span>${f.funding_goal_amount}</span>funding goal
                          </div>
                          <div className="process-funded">
                            <span>
                              {f.funding_amount === 0
                                ? 0
                                : (f.funding_amount / f.funding_goal_amount) * 100}
                              %
                            </span>
                          </div>
                          <div className="process-time">
                            <span>{f.backed_list.length}</span>backers
                          </div>
                          <div className="process-time">
                            <span>{moment(f.ended_at).diff(currentDate, 'days')}</span>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <form action="#" id="priceForm" className="campaign-price quantity">
                          <input type="number" value="1" min="0" name="s" placeholder="" />
                          <button className="btn-primary" type="submit">
                            Back this Campaign
                          </button>
                        </form>
                        <Link to="/" className="btn-secondary">
                          <i className="fa fa-heart" aria-hidden="true" />
                          Remind me
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="campaign-history">
          <div className="container">
            <div className="row">
              {!loading && fund && (
                <div className="col-lg-12">
                  {fund.map(f => (
                    <div className="campaign-tabs">
                      <ul className="tabs-controls">
                        <li className="active" data-tab="campaign">
                          <Link to="/">Description</Link>
                        </li>
                        <li data-tab="backer">
                          <Link to="/">Backer List</Link>
                        </li>
                        <li data-tab="faq">
                          <Link to="/">FAQ</Link>
                        </li>
                        <li data-tab="comment">
                          <Link to="/">Cheering Comment</Link>
                        </li>
                      </ul>
                      <div className="campaign-content">
                        <div id="campaign" className="tabs active">
                          <img src={f.content_image} alt="" />
                          <p>{f.description}</p>
                        </div>
                        <div id="backer" className="tabs">
                          <table>
                            <tr>
                              <th>Name</th>
                              <th>Donate Amount</th>
                              <th>Date</th>
                            </tr>
                            <tr>
                              <td>Andrew</td>
                              <td>$100</td>
                              <td>June 25, 2017</td>
                            </tr>
                            <tr>
                              <td>Andrew</td>
                              <td>$60</td>
                              <td>December 25, 2017</td>
                            </tr>
                            <tr>
                              <td>Andrew</td>
                              <td>$70</td>
                              <td>November 25, 2017</td>
                            </tr>
                            <tr>
                              <td>Andrew</td>
                              <td>$90</td>
                              <td>February 25, 2017</td>
                            </tr>
                            <tr>
                              <td>Andrew</td>
                              <td>$30</td>
                              <td>January 25, 2017</td>
                            </tr>
                            <tr>
                              <td>Andrew</td>
                              <td>$80</td>
                              <td>June 15, 2017</td>
                            </tr>
                          </table>
                        </div>
                        <div id="faq" className="tabs">
                          <h2>Frequently Asked Questions</h2>
                          <p>
                            Looks like there aren`t any frequently asked questions yet. Ask the
                            project creator directly.
                          </p>
                          <Link to="/" className="btn-primary">
                            Ask a question
                          </Link>
                        </div>
                        <div id="comment" className="tabs comment-area">
                          <h3 className="comments-title">1 Comment</h3>
                          <ol className="comments-list">
                            <li className="comment clearfix">
                              <div className="comment-body">
                                <div className="comment-avatar">
                                  <img src={require('src/images/placeholder/70x70.png')} alt="" />
                                </div>
                                <div className="comment-info">
                                  <header className="comment-meta" />
                                  <cite className="comment-author">Jordan B. Goodale</cite>
                                  <div className="comment-inline">
                                    <span className="comment-date">2 days ago</span>
                                    <Link to="/" className="comment-reply">
                                      Reply
                                    </Link>
                                  </div>
                                  <div className="comment-content">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Equidem e Cn. Sequitur disserendi ratio cognitioque naturae;
                                      Nunc vides, quid faciat. Duo Reges: constructio interrete.
                                      Memini vero, inquam; Quis Aristidem non mortuum diligit?
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <div id="respond" className="comment-respond">
                            <h3 id="reply-title" className="comment-reply-title">
                              Leave A Comment?
                            </h3>
                            <form action="#" id="commentForm">
                              <div className="field-textarea">
                                <textarea rows="8" placeholder="Your Comment" />
                              </div>
                              <div className="row">
                                <div className="col-md-4 field">
                                  <input type="text" value="" name="s" placeholder="Your Name" />
                                </div>
                                <div className="col-md-4 field">
                                  <input type="text" value="" name="s" placeholder="Your Email" />
                                </div>
                                <div className="col-md-4 field">
                                  <input type="text" value="" name="s" placeholder="Website" />
                                </div>
                              </div>
                              <button type="submit" value="Send Messager" className="btn-primary">
                                Post Comment
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detail;
