import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Featured.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FeaturedNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function FeaturedPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const { data } = await axios.get('/api/v1/products/featured');
      setFeaturedProducts(data.products);
    };
    fetchFeaturedProducts();
  }, []);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // infinite: true,
    // className: 'center',
    nextArrow: <FeaturedNextArrow />,
    prevArrow: <FeaturedPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="featured-section">
      <div className="container">
        <h3>Featured Products</h3>
        <div className="carousel-container">
          <Slider {...settings}>
            {featuredProducts
              .map((product) => {
                const { _id, name, image, price } = product;
                return (
                  <Link to={`/products/featured/${_id}`} key={_id}>
                    <div className="card">
                      <img src={image} alt="" />
                      <div className="card-info">
                        <p className="card-name">{name}</p>
                        <div className="featured-footer">
                          <div className="price">
                            <span className="peso-sign">&#8369;</span>
                            {price[0].price}.00
                          </div>
                          <button className="add-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
              .reverse()}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Featured;
