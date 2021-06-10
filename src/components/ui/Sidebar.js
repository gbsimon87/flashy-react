import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../../context';
import ToggleSwitch from './Toggleswitch/ToggleSwitch';

const Sidebar = () => {
  const {
    autoplay,
    toggleAutoplay,
    toggleTheme,
    cardFlipTime,
    changeCardFlipTime,
    isSidebarOpen,
    toggleSidebar,
    theme,
    themes
  } = useGlobalContext();

  const isDarkMode = theme === themes.light ? false : true;

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`} style={theme.sidebar}>
      <div className='sidebar-header'>
        <button className='sidebar-close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className='sidebar-content'>
      <div className="settings__options">
        <div className="setting">
          <div>Autoplay</div>
          <div>
            <ToggleSwitch
              name="autoplay"
              id="autoplay"
              checked={autoplay || false}
              onChange={checked => toggleAutoplay(autoplay)}
              />
          </div>
        </div>
        <div className="setting">
          <div>Dark Mode</div>
          <div>
            <ToggleSwitch
              name="darkmode"
              id="darkmode"
              checked={isDarkMode || false}
              onChange={checked => toggleTheme(theme, themes)}
              />
          </div>
        </div>
        <div className="setting">
          <div>Next card in</div>
          <div className="setting__speed">
            <select
              value={cardFlipTime}
              name="settingSpeed"
              id="settingSpeed"
              onChange={(event) => changeCardFlipTime(event.target.value)}
              >
              <option value="1">1 second</option>
              <option value="2">2 seconds</option>
              <option value="3">3 seconds</option>
              <option value="4">4 seconds</option>
              <option value="5">5 seconds</option>
            </select>
          </div>
        </div>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;