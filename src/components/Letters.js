import { useState, useEffect } from 'react';

import { useGlobalContext } from '../context';
import SectionFooter from './ui/SectionFooter';

function Letters({ randomLetters }) {
  const { autoplay, theme, pageTitle } = useGlobalContext();

  const [letter] = useState(randomLetters);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const lastIndex = letter.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, letter]);

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

  useEffect(() => {
    if (autoplay) {
      setPaused(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="letters" style={theme.main}>
      <section className="section__title" style={theme.main}>{pageTitle}</section>
      <section className="section__body">
        {letter.map((letter, numberIndex) => {
          const { value, description } = letter;
          let position = 'nextSlide';
          if (numberIndex === index) {
            position = 'activeSlide';
          }
          if (
            numberIndex === index - 1 ||
            (index === 0 && numberIndex === letter.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={`${position} article`} key={value}>
              <div
                className="slide-background-color"
                >
                  <p>{value}</p>
                </div>
                <div className="article__controls">
                  {description && <h4>{description}</h4>}
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

export default Letters
