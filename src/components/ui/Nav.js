import { GoSettings } from "react-icons/go";
import { IoIosFlash } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

function Nav() {
  const { theme, toggleSidebar } = useGlobalContext();

  return (
    <nav className="nav" style={theme && theme.nav}>
      <header className="nav__header">
        <Link to="/" style={theme && theme.nav}>
          <h3 className="logo">Flash<IoIosFlash /></h3>
        </Link>
      </header>
      <div className="nav__right" >
        <div className="nav-settings" style={theme && theme.nav}>
          <GoSettings size="2rem" onClick={toggleSidebar} />
        </div>
        <div className="nav-title">
          <Link to="/learn" style={theme && theme.nav}><MdDashboard size="2rem" /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
