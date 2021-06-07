import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

import Logo from "./ui/Logo";

function Shapes({ randomShapes }) {
  const [shape] = useState(randomShapes);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const lastIndex = shape.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, shape]);

  const handlePreviousButton = () => {
    setIndex(index - 1);
    setPaused(true);
  }
  
  const handleNextButton = () => {
    setIndex(index + 1);
    setPaused(true);
  }

  useEffect(() => {
    let slider;
    if (!paused) {
      slider = setInterval(() => {
        setIndex(index + 1);
      }, 1000);
    }
    return () => {
      clearInterval(slider);  
    }
  }, [paused, index])

  return (
    <div className="shapes">
      <section className="section__body">
        {randomShapes.map((shape, numberIndex) => {
          const { id, value, description } = shape;
          let position = 'nextSlide';
          if (numberIndex === index) {
            position = 'activeSlide';
          }
          if (
            numberIndex === index - 1 ||
            (index === 0 && numberIndex === shape.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={`${position} article`} key={id}>
              <div
                className="slide-background-color"
                >
                  <p>{value}</p>
                </div>
                <div className="article__controls">
                  <h4>{description}</h4>
              </div>
            </article>
          );
        })}
      </section>
      <section className="section__footer">
        <button
          className="button section__body__button"
          onClick={() => handlePreviousButton()}>
          <FiChevronLeft />
        </button>
        <button
          className="button section__body__button"
          onClick={() => setPaused(!paused)}>
            { paused ? <BsFillPlayFill /> : <BsFillPauseFill /> }
        </button>
        <button
          className="button section__body__button"
          onClick={() => handleNextButton()}>
          <FiChevronRight />
        </button>
      </section>
    </div>
  )
}

export default Shapes
