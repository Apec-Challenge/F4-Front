import React from 'react';
import { Link } from 'react-router-dom';
import useReadPlace from 'src/hook/place/useReadPlace';

const List = () => {
  const { places, error, loading } = useReadPlace();
  return (
    <main id="main" className="site-main">
      <div className="page-title background-cart">
        <div className="container">
          <h1>Place List</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link to="/place/list">Place</Link>
                <span>/</span>
              </li>
              <li>List</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="campaigns">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-lg-12 main-content">
              <div className="shop-grid-fillter clearfix">
                <p>Showing 1–12 of {!loading && places && places.length} results</p>
                <div className="field-select">
                  <select name="s">
                    <option value="">Default sorting</option>
                    <option value="">Name</option>
                  </select>
                </div>
              </div>
              {loading && '로딩중..'}
              {!loading && places && (
                <div className="grid-product">
                  {places.map(place => (
                    <div key={place.id} className="product">
                      <Link to="/place/detail">
                        <img src={require('src/images/placeholder/270x180.png')} alt="" />
                      </Link>
                      <div className="product-info">
                        <h3 className="product-title">
                          <Link to="/place/detail">{place.title}</Link>
                        </h3>
                        <p className="product-price">{place.description}</p>
                        <p className="product-price">{place.business_hour}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="latest-button">
              <Link to="/" className="btn-primary">
                Load more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default List;
