import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../../context';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <button className='sidebar-close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;