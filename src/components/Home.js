import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillRead } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi";
import { BsFillPersonFill } from "react-icons/bs";

import { useGlobalContext } from '../context';

function Home() {
  const { theme } = useGlobalContext();
  return (
    <div className="home" style={theme && theme.callout}>
      <section className="home__callout">
        <p>GO AHEAD, LEVEL UP</p>
      </section>
      <section className="home__action">
        <Link style={theme && theme.callout && theme.calloutLink} to="/learn" className="start-learning">START LEARNING</Link>
      </section>
      <section className="home__benefits" style={theme && theme.home && theme.home.benefits}>
        <div className="benefits_card">
          <AiFillRead size="2rem" />
          <p>Learn new concepts</p>
        </div>
        <div className="benefits_card">
          <SiGooglescholar size="2rem" />
          <p>Champion your inner genius</p>
        </div>
        <div className="benefits_card">
          <BsFillPersonFill size="2rem" />
          <p>Suitable for all ages</p>
        </div>
        <div className="benefits_card">
          <WiMoonAltWaxingCrescent4 size="2rem" />
          <p>Switch between light and dark</p>
        </div>
      </section>
    </div>
  )
}

export default Home
