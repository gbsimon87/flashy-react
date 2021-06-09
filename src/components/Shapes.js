import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import SectionFooter from './ui/SectionFooter';

function Shapes({ randomShapes }) {
  const { autoplay, theme } = useGlobalContext();
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

  useEffect(() => {
    if (autoplay) {
      setPaused(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="shapes" style={theme.main}>
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
      <SectionFooter
        handlePreviousButton={handlePreviousButton}
        paused={paused}
        setPaused={setPaused}
        handleNextButton={handleNextButton}
        />
    </div>
  )
}

export default Shapes
