import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

import Logo from "../components/ui/Logo";

function Numbers({ randomNumbers }) {
  const [numbers] = useState(randomNumbers);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const lastIndex = numbers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, numbers]);

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
    <div className="numbers">
      <section className="section__body">
        {numbers.map((number, numberIndex) => {
          const { name } = number;
          let position = 'nextSlide';
          if (numberIndex === index) {
            position = 'activeSlide';
          }
          if (
            numberIndex === index - 1 ||
            (index === 0 && numberIndex === number.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={`${position} article`} key={name}>
              <div
                className="slide-background-color"
                >
                  <p>{number.value}</p>
                </div>
                <div className="article__controls">
                  <h4>{name}</h4>
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

export default Numbers
