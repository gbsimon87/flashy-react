import React from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";

import { useGlobalContext } from '../../context';

function GameTitle({ handleGoToLearnScreen }) {
  const { theme, pageTitle } = useGlobalContext();

  return (
    <section className="section__title">
      <HiOutlineArrowLeft size="2rem" onClick={handleGoToLearnScreen} />
      <p style={theme && theme.main}>{pageTitle}</p>
    </section>
  )
}

export default GameTitle;
