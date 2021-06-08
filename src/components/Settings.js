import ToggleSwitch from "./ui/Toggleswitch/ToggleSwitch";
import { useGlobalContext } from "../context";

function Settings() {
  const { autoplay, toggleAutoplay, theme, themes, toggleTheme } = useGlobalContext();
  
  const isDarkMode = theme === themes.light ? false : true;

  return (
    <div className="settings" style={theme}>
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
      </div>
    </div>
  )
}

export default Settings
