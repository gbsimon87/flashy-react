import React from 'react'
import Logo from './Logo'
import PageTitle from './PageTitle'

function Nav() {
  return (
    <nav className="nav">
      <header className="nav__header">
        <Logo />
      </header>
      <PageTitle />
    </nav>
  )
}

export default Nav
