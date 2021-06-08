import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

function Nav() {
  const { pageTitle, theme } = useGlobalContext();

  return (
    <nav className="nav" style={theme}>
      <header className="nav__header">
        <Link to="/" style={theme}>
          <h2 className="logo">Flashy</h2>
        </Link>
      </header>
      <div className="nav__right">
        <div className="page-title">
          { pageTitle }
        </div>
        <div className="nav__right--settings">
          <Link style={theme} to="/settings">
            <GoSettings />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
