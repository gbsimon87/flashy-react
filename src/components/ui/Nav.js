import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import Logo from './Logo'
import PageTitle from './PageTitle'

function Nav() {
  return (
    <nav className="nav">
      <header className="nav__header">
        <Logo />
      </header>
      <div className="nav__right">
        <PageTitle />
        <div className="nav__right--settings">
        <Link to="/settings"><GoSettings /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
