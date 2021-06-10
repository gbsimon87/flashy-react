import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

function Nav() {
  const { pageTitle, theme, toggleSidebar } = useGlobalContext();

  return (
    <nav className="nav" style={theme.nav}>
      <header className="nav__header">
        <Link to="/" style={theme}>
          <h3 className="logo">Flashy</h3>
        </Link>
      </header>
      <div className="nav__right" >
        <div className="nav-title" style={theme.nav}>
          { pageTitle }
        </div>
        <div className="nav-settings">
          <GoSettings size="2rem" onClick={toggleSidebar} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
