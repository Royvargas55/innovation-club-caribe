import React from 'react';

// Styles
import '../styles/components/CarouselItem.scss';

const CarouselItem = ({ questionNumber, answer, image }) => {
  return (
    <>
      <div className="answer">
        <div className="answer__image">
          <img src={image} alt="" />
        </div>
        <div className="answer__content">
          <h1>{questionNumber}</h1>
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
