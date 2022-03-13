import React, { useEffect, useState } from 'react';
import { dataSlider } from '../../data';
import './HeroSlider.css';
// import {
//   MdOutlineArrowForwardIos,
//   MdOutlineArrowBackIos,
// } from 'react-icons/md';

const HeroSlider = () => {
  const [cakes, setCakes] = useState(dataSlider);
  const [index, setIndex] = useState(0);

  // if the index is surpass the length of an array or below
  useEffect(() => {
    const lastIndex = cakes.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [cakes, index]);

  // auto slide
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const moveDot = (index) => setIndex(index);

  return (
    <div className="slider">
      {cakes.map((cake, cakeIndex) => {
        const { id, image, name } = cake;

        let position = 'nextSlide';
        if (cakeIndex === index) {
          position = 'activeSlide';
        }
        if (
          cakeIndex === index - 1 ||
          (cakeIndex === 0 && cakeIndex === cakes.length - 1)
        ) {
          position = 'lastSlide';
        }

        return (
          <article key={id} className={position}>
            <img src={image} alt={name} />
          </article>
        );
      })}

      {/* slider buttons  */}
      {/* <button className="prev" onClick={() => setIndex(index - 1)}>
        <MdOutlineArrowBackIos />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <MdOutlineArrowForwardIos />
      </button> */}

      <div className="container-dots">
        {Array.from({ length: cakes.length }).map((item, dotIndex) => {
          return (
            <div
              key={dotIndex}
              className={`dot ${index === dotIndex && 'dot-active'}`}
              onClick={() => moveDot(dotIndex)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlider;
