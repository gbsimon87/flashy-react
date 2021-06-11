import { useState, useEffect } from 'react';

import { useGlobalContext } from '../context';
import SectionFooter from './ui/SectionFooter';

function Colors({ randomColors }) {
  const { autoplay, theme, cardFlipTime = 5000, pageTitle } = useGlobalContext();

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
      }, cardFlipTime * 1000);
    }
    return () => {
      clearInterval(slider);
    }
  }, [paused, index, cardFlipTime])

  useEffect(() => {
    if (autoplay) {
      setPaused(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="colors" style={theme.main}>
      <section className="section__title" style={theme.main}>{pageTitle}</section>
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
              <div className="article__controls" style={theme.main}>
                <h4>{name}</h4>
              </div>
            </article>
          );
        })}
      </section>
      <SectionFooter
        handlePreviousButton={handlePreviousButton}
        paused={paused}
        setPaused={setPaused}
        handleNextButton={handleNextButton}
        />
    </div>
  )
}

export default Colors
