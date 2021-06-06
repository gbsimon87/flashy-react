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
        <ul>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home
