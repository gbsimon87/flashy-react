import React from 'react'
import { useGlobalContext } from '../../context';

function PageTitle() {
  const { pageTitle } = useGlobalContext();

  return (
    <div className="page-title">
      { pageTitle }
    </div>
  )
}

export default PageTitle
