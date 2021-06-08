import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

import { useGlobalContext } from '../../context';

function SectionFooter({
  handlePreviousButton,
  paused,
  setPaused,
  handleNextButton
}) {
  const { theme } = useGlobalContext();

  return (
    <section className="section__footer">
      <button
        className="button section__body__button"
        style={theme}
        onClick={() => handlePreviousButton()}>
        <FiChevronLeft />
      </button>
      <button
        className="button section__body__button"
        style={theme}
        onClick={() => setPaused(!paused)}>
          { paused ? <BsFillPlayFill /> : <BsFillPauseFill /> }
      </button>
      <button
        className="button section__body__button"
        style={theme}
        onClick={() => handleNextButton()}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default SectionFooter
