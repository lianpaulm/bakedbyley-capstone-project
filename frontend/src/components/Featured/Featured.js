import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    // centerMode: true,
    // infinite: true,
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
        breakpoint: 600,
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
        <h3>Featured Product</h3>
        <div className="carousel-container">
          <Slider {...settings}>
            {featuredProducts.map((product) => {
              const { _id, name, image, category, price } = product;
              return (
                <Link to={`/products/featured/${_id}`} key={_id}>
                  <div className="card">
                    <img src={image} alt="" />
                    <div className="card-info">
                      <p className="card-name">{name}</p>
                      <div>
                        <div className="price">P{price}</div>
                        <button className="add-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Featured;
