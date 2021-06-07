import {
  Link
} from "react-router-dom";
import  Logo from "../components/ui/Logo";
import Footer from "./ui/Footer";

function Home() {
  return (
    <>
      <div className="home">
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
      <Footer />
    </>
  )
}

export default Home
