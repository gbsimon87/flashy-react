import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillRead } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { BsBrightnessHigh } from "react-icons/bs";

import Footer from "../components/ui/Footer"
import { useGlobalContext } from '../context'

function Home() {
  const { theme } = useGlobalContext();
  return (
    <div className="home" style={theme && theme.callout}>
      <section className="home__callout">
        <h1>The simplest way to learn</h1>
        <p>Studying with flashcards could not be any easier.</p>
        <p>Browse various categories to learn all sorts of topics.</p>
        <Link style={theme && theme.callout && theme.calloutLink} to="/learn" className="start-learning">START LEARNING</Link>
      </section>
      <section className="home__benefits" style={theme && theme.home && theme.home.benefits}>
        <div className="benefits_card">
          <AiFillRead size="2rem" />
          <p>Study at your own pace</p>
        </div>
        <div className="benefits_card">
          <SiGooglescholar size="2rem" />
          <p>Champion your inner genius</p>
        </div>
        <div className="benefits_card">
          <BsBrightnessHigh size="2rem" />
          <p>Keep your mind sharp</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
