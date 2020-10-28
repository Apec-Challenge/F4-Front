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
                <a href="index.html">Place</a>
                <span>/</span>
              </li>
              <li>List</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        {loading && '로딩중..'}
        {!loading && places && (
          <div className="row">
            <div className="col-lg-12 main-content">
              <div className="shop-grid-fillter clearfix">
                <p>Showing 1–12 of {places.length} results</p>
                <div className="field-select">
                  <select name="s">
                    <option value="">Default sorting</option>
                    <option value="">Name</option>
                  </select>
                </div>
              </div>
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
              <div className="page-navigation">
                <span className="page-numbers current">1</span>
                <Link to="/" className="page-numbers">
                  2
                </Link>
                <Link to="/" className="page-numbers">
                  3
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default List;
