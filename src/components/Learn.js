import {
  Link
} from "react-router-dom";
import { useGlobalContext } from "../context";

function Learn() {
  const { theme } = useGlobalContext();
  return (
    <>
      <div className="learn" style={theme.main}>
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
    </>
  )
}

export default Learn
