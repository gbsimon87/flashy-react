import { useGlobalContext } from "../context";
import ToggleSwitch from "./ui/Toggleswitch/ToggleSwitch";

function Settings() {
  const { autoplay, toggleAutoplay, darkMode, toggleDarkMode } = useGlobalContext();

  return (
    <div className="settings">
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
              checked={darkMode || false}
              onChange={checked => toggleDarkMode(darkMode)}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
