import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export const GARouteChangeTracker = () => {
  const location = useLocation();
  useEffect(function () {
    const path = location.pathname + location.search;
    ReactGA.set({ page: path });
    ReactGA.pageview(path); // Record a pageview for the given page
  },[location]);

  return '';
};

export const initializeGA = () => {
  const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID, {
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });
}

export const gaSendViewSettingsModal = () => {
  ReactGA.modalview('settings');
}
