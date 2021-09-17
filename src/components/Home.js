import React from 'react';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context';

function Home() {
  const { theme } = useGlobalContext();
  return (
    <div className="home">
      <section className="home__callout" style={theme && theme.callout}>
        <p>GO AHEAD,</p>
        <p>LEVEL UP</p>
      </section>
      <section className="home__action">
        <Link style={theme && theme.callout && theme.calloutLink} to="/learn" className="start-learning">START LEARNING</Link>
      </section>
    </div>
  )
}

export default Home
