import { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Home from './components/Home';
import Learn from './components/Learn';
import Error from './components/Error';
import Settings from "./components/Settings";
import GameTemplate from "./components/ui/GameTemplate";
import Nav from "./components/ui/Nav";
import Backdrop from "./components/ui/Backdrop";
import Sidebar from "./components/ui/Sidebar";
import Footer from "./components/ui/Footer";
import { randomColors, randomNumbers, randomLetters, randomShapes } from './data';
import { useGlobalContext } from './context';
import { GARouteChangeTracker } from './analytics/ga';

function App() {
  let { pathname } = useLocation();
  const { changePageTitle } = useGlobalContext();
  
  useEffect(() => {
    changePageTitle(pathname);
    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className="App">
      <GARouteChangeTracker />
      <Nav />
      <Backdrop />
      <Sidebar />
      <main>
        <Switch>
          <Route path="/colors">
            <GameTemplate data={randomColors} />
          </Route>
          <Route path="/numbers">
            <GameTemplate data={randomNumbers} />
          </Route>
          <Route path="/letters">
            <GameTemplate data={randomLetters} />
          </Route>
          <Route path="/shapes">
            <GameTemplate data={randomShapes} />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
      { pathname === "/" && <Footer />}
    </div>
  );
}

export default App;
