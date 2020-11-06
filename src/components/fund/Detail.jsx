import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Slider from '@material-ui/core/Slider';
import * as api from 'src/api/api';
import useReadDetailFund from 'src/hook/fund/useReadDetailFund';
import useCommentCreate from 'src/hook/fund/useCommentCreate';
import useCash from 'src/hook/common/useAddCash';
import Raised from 'src/components/common/Raised';

const Detail = ({ fund_id }) => {
  const { onReadFund, fund, loading } = useReadDetailFund({ fund_id });
  const { onSubmit, onChangeField, content } = useCommentCreate({ fund_id });
  const cash = useCash();
  const currentDate = moment().toISOString();
  const [active, setActive] = useState({ desc: 'active', backer: 0, PPE: 0, cheer: 0 });
  const onChangeComment = e => onChangeField({ key: 'comment_content', value: e.target.value });
  const onTabClick = e => {
    setActive({ desc: 0, backer: 0, PPE: 0, cheer: 0 });
    const { title } = e.target;
    setActive({ [title]: 'active' });
  };
  const onLike = () => {
    api.fundLike({ nickname: cash.auth.nickname, id: fund_id });
    onReadFund(fund_id);
  };
  return (
    <div className="campaign-detail">
      <main id="main" className="site-main">
        {!loading &&
          fund &&
          fund.map(f => (
            <div key={f.id} className="page-title background-campaign">
              <img src={f.thumbnail_image} alt="" style={{ height: '220px', width: '100%' }} />
              <div className="container">
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
            </div>
          ))}
        <div className="campaign-content">
          <div className="container">
            {!loading && fund && (
              <div className="campaign">
                {fund.map(f => (
                  <div key={f.id} className="campaign-item clearfix">
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
                      <div
                        className="campaign-author clearfix"
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                      >
                        <div className="author-profile">
                          <Link className="author-icon" to="/">
                            <img src={require('src/images/user.png')} alt="" />
                          </Link>
                          by
                          <Link className="author-name" to="/">
                            {f.owner_username}
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
                          {f.total_likes}
                        </div>
                      </div>
                      <div className="author-address">
                        <span className="ion-location" style={{ marginRight: '10px' }} />
                        {f.place.address}
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
                                : parseInt((f.funding_amount / f.funding_goal_amount) * 100)}
                              %
                            </span>
                            funded
                          </div>
                          <div className="process-time">
                            <span>{f.backed_list.length}</span>backers
                          </div>
                          <div className="process-time">
                            <span>{moment(f.ended_at).diff(currentDate, 'days')}</span>days ago
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        <form
                          id="priceForm"
                          className="campaign-price quantity"
                          onSubmit={cash.onFundCash}
                        >
                          <button className="btn-primary" type="submit">
                            Funding
                          </button>
                        </form>
                        <button className="btn-secondary" type="button" onClick={onLike}>
                          <i className="fa fa-heart" aria-hidden="true" />
                          Like me
                        </button>
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
                    <div key={f.id} className="campaign-tabs">
                      <ul className="tabs-controls">
                        <li
                          className={active.desc}
                          title="desc"
                          data-tab="campaign"
                          onClick={onTabClick}
                        >
                          Description
                        </li>
                        <li
                          className={active.backer}
                          title="backer"
                          data-tab="backer"
                          onClick={onTabClick}
                        >
                          Backer List
                        </li>
                        <li className={active.PPE} title="PPE" data-tab="PPE" onClick={onTabClick}>
                          PPE
                        </li>
                        <li
                          className={active.cheer}
                          title="cheer"
                          data-tab="cheering-comment"
                          onClick={onTabClick}
                        >
                          Cheering Comment
                        </li>
                      </ul>
                      <div className="campaign-content">
                        <div id="campaign" className={`tabs ${active.desc}`}>
                          <img src={f.content_image} alt="" />
                          <p>{f.description}</p>
                        </div>
                        <div id="backer" className={`tabs ${active.backer}`}>
                          <table>
                            <thead>
                              <tr>
                                <th>Name</th>
                              </tr>
                            </thead>
                            {f.backed_list.map((backer, index) => (
                              <tbody key={index}>
                                <tr>
                                  <td>{backer}</td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                        <div id="faq" className={`tabs ${active.PPE}`}>
                          <h2>Personal Protective Equipment (PPE)</h2>
                          <h4>Person hygiene</h4>
                          <Slider
                            style={{ width: '50%' }}
                            defaultValue={f.place.person_hygiene}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={5}
                            marks
                            min={0}
                            max={5}
                          />
                          <h4>Hand sanitizer</h4>
                          <Slider
                            style={{ width: '50%' }}
                            defaultValue={f.place.hand_sanitizer}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={5}
                            marks
                            min={0}
                            max={5}
                          />
                          <h4>Body temperature check</h4>
                          <Slider
                            style={{ width: '50%' }}
                            defaultValue={f.place.body_temperature_check}
                            // getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={5}
                            marks
                            min={0}
                            max={5}
                          />
                        </div>
                        <div id="comment" className={`tabs ${active.cheer} comment-area`}>
                          <h3 className="comments-title">{f.comment_list.length} Comment</h3>
                          <ol className="comments-list">
                            {f.comment_list.map(comment => (
                              <li key={comment.id} className="comment clearfix">
                                <div className="comment-body">
                                  <div className="comment-avatar">
                                    <img
                                      src={require('src/images/user.png')}
                                      alt=""
                                      style={{ width: '70ox', height: '70px' }}
                                    />
                                  </div>
                                  <div className="comment-info">
                                    <header className="comment-meta" />
                                    <cite className="comment-author">{comment.username}</cite>
                                    <div className="comment-inline">
                                      <span className="comment-date">
                                        {moment(currentDate).diff(comment.created_at, 'days')} days
                                        ago
                                      </span>
                                    </div>
                                    <div className="comment-content">
                                      <p>{comment.content}</p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ol>
                          <div id="respond" className="comment-respond">
                            <h3 id="reply-title" className="comment-reply-title">
                              Leave A Comment?
                            </h3>
                            <form id="commentForm" onSubmit={onSubmit}>
                              <div className="field-textarea">
                                <textarea
                                  rows="8"
                                  placeholder="Your Comment"
                                  onChange={onChangeComment}
                                  value={content}
                                />
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
