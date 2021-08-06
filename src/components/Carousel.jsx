import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

// Components
import ArrowRightSVG from './Arrow/ArrowRightSVG';
import ArrowLeftSVG from './Arrow/ArrowLeftSVG';
import CarouselItem from './CarouselItem';
import CarouselItemAnswerPage from './CarouselItemAnswerPage';

// Styles
import '../styles/components/Carousel.scss';

export const Carousel = ({ questions, space }) => {
  const location = useLocation();
  const [current, setCurrent] = useState(0);
  const length = questions.length;

  const carouselClass = classNames('carousel', {
    space,
  });

  const nextQuestion = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevQuestion = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(questions) || questions.length <= 0) {
    return null;
  }

  return (
    <>
      <section className={carouselClass}>
        <div className="carousel__left__arrow">
          <button
            className="carousel__right__arrow__button"
            onClick={prevQuestion}
          >
            <ArrowLeftSVG />
          </button>
        </div>
        <div className="carousel__right__arrow">
          <button
            className="carousel__right__arrow__button"
            onClick={nextQuestion}
          >
            <ArrowRightSVG />
          </button>
        </div>
        {questions.map((question, index) => {
          return (
            <div
              className={
                index === current ? 'carousel__item active' : 'carousel__item'
              }
              key={index}
            >
              {index === current && (
                <div>
                  {location.pathname === '/real-answer' ? (
                    <CarouselItem
                      questionNumber={question.question}
                      answer={question.answer}
                      image={question.image}
                    />
                  ) : (
                    <CarouselItemAnswerPage
                      questionNumber={question.question}
                      answer={question.answer}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};
