import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useReadDetailPlace from 'src/hook/place/useReadDetailPlace';
import useReview from 'src/hook/place/useReview';

const Detail = ({ place_id }) => {
  const { place, error, loading } = useReadDetailPlace({ place_id });
  const { onSubmit, onChangeField, review, reviewLoading, content, rating } = useReview({
    place_id,
  });
  const currentDate = moment().toISOString();
  const onChangeContent = e => onChangeField({ key: 'reviewContent', value: e.target.value });
  const onChangeRating = e => onChangeField({ key: 'rating', value: parseInt(e.target.value) });
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
          <div className="col-lg-12 main-content">
            {!loading && place && (
              <div className="shop-details">
                <div className="shop-details-content">
                  <article className="post">
                    <div className="author-likes">likes {place.total_likes}</div>
                    <h2>{place.title}</h2>
                    <div className="shop-detail-img">
                      <img src={place.place_image} alt="" />
                    </div>
                    <h3>Descriptions</h3>
                    <p>{place.description}</p>
                    {review && !reviewLoading && (
                      <div id="comment" className="reviews comment-area">
                        <h3>Reviews ({review.length})</h3>
                        <ol className="comments-list">
                          {review.map(r => (
                            <li key={r.id} className="comment clearfix">
                              <div className="comment-body">
                                <div className="comment-avatar">
                                  <img src={require('src/images/placeholder/70x70.png')} alt="" />
                                </div>
                                <div className="comment-info">
                                  <header className="comment-meta" />
                                  <cite className="comment-author">{r.username}</cite>
                                  <div className="comment-inline">
                                    <span className="comment-date">
                                      {moment(currentDate).diff(r.created_at, 'days')} days ago
                                    </span>
                                  </div>
                                  <div className="comment-content">
                                    <p>{r.content}</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ol>
                        <form
                          method="POST"
                          id="shopdetailsForm"
                          className="clearfix"
                          onSubmit={onSubmit}
                        >
                          <div className="field">
                            <textarea
                              rows="8"
                              placeholder="Your review"
                              onChange={onChangeContent}
                              value={content}
                            />
                          </div>
                          <div className="reviews-vote clearfix">
                            <div className="vote" style={{ display: 'flex' }}>
                              <span style={{ paddingTop: '3px' }}>Your Rating</span>
                              <div>
                                <fieldset className="rating">
                                  <input
                                    type="radio"
                                    id="star5"
                                    name="rating"
                                    value="5"
                                    onChange={onChangeRating}
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star5"
                                    title="Awesome - 5 stars"
                                  />
                                  <input
                                    type="radio"
                                    id="star4"
                                    name="rating"
                                    value="4"
                                    onChange={onChangeRating}
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star4"
                                    title="Pretty good - 4 stars"
                                  />
                                  <input
                                    type="radio"
                                    id="star3"
                                    name="rating"
                                    value="3"
                                    onChange={onChangeRating}
                                  />
                                  <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                                  <input
                                    type="radio"
                                    id="star2"
                                    name="rating"
                                    value="2"
                                    onChange={onChangeRating}
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star2"
                                    title="Kinda bad - 2 stars"
                                  />
                                  <input
                                    type="radio"
                                    id="star1"
                                    name="rating"
                                    value="1"
                                    onChange={onChangeRating}
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star1"
                                    title="Sucks big time - 1 star"
                                  />
                                </fieldset>
                              </div>
                            </div>
                            <button type="submit" value="Send Review" className="btn-primary">
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </article>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
