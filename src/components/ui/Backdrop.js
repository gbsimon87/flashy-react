import React from 'react'
import { useGlobalContext } from '../../context';

function Backdrop() {
  const {
    isSidebarOpen,
  } = useGlobalContext();
  return (
    <div className="backdrop" style={ isSidebarOpen ? { display: "block" } : {display: "none" }} />
  )
}

export default Backdrop
