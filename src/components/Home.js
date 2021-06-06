import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="section__title">
        <h2>
          Flashy
        </h2>
      </section>
      <section className="section__body">
        <div className="game">
          <Link to="/colors">Colors</Link>
        </div>
        <div className="game">
          <Link to="/numbers">Numbers</Link>
        </div>
        <div className="game">
          <Link to="/letters">Letters</Link>
        </div>
        <div className="game">
          <Link to="/shapes">Shapes</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
