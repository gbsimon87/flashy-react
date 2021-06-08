import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";


function Colors({ randomColors }) {
  const [colors] = useState(randomColors);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const lastIndex = colors.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, colors]);

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
      }, 2000);
    }
    return () => {
      clearInterval(slider);
    }
  }, [paused, index])

  return (
    <div className="colors">
      <section className="section__body">
        {randomColors.map((colours, personIndex) => {
          const { name } = colours;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === colours.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={`${position} article`} key={name}>
              <div
                className="slide-background-color"
                style={{ backgroundColor: `${name}` }}
                />
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

export default Colors
