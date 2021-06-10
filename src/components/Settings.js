import ToggleSwitch from "./ui/Toggleswitch/ToggleSwitch";
import { useGlobalContext } from "../context";

function Settings() {
  const {
    autoplay,
    toggleAutoplay,
    theme,
    themes,
    toggleTheme,
    cardFlipTime = 3000,
    changeCardFlipTime
  } = useGlobalContext();
  const isDarkMode = theme === themes.light ? false : true;

  return (
    <div className="settings" style={theme.main}>
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
          <div>Next card in...</div>
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
  )
}

export default Settings
