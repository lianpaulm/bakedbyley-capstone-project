import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import { testimonials } from '../../data';
import { FaQuoteLeft } from 'react-icons/fa';

function FeaturedNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}

function FeaturedPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState(testimonials);

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: true,
    nextArrow: <FeaturedNextArrow />,
    prevArrow: <FeaturedPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h3>Testimonials </h3>
          <p>What our customers say about us.</p>
        </div>

        <div className="testimonials-carousel">
          <Slider {...settings}>
            {testimonialsData.map((item) => {
              const { _id: id, name, image, testimony } = item;
              return (
                <div className="tes-card" key={id}>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="tes-text">{testimony}</p>
                  <div className="tes-card-info">
                    <img src={image} alt="" />
                    <p className="name">{name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
