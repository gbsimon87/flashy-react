import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import SectionFooter from './ui/SectionFooter';

function Numbers({ randomNumbers }) {
  const { autoplay, theme, pageTitle } = useGlobalContext();

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

  useEffect(() => {
    if (autoplay) {
      setPaused(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="numbers" style={theme.main}>
      <section className="section__title">{pageTitle}</section>
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
      <SectionFooter
        handlePreviousButton={handlePreviousButton}
        paused={paused}
        setPaused={setPaused}
        handleNextButton={handleNextButton}
        />
    </div>
  )
}

export default Numbers
