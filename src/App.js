import { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Home from './components/Home';
import Colors from './components/Colors';
import Numbers from "./components/Numbers";
import Letters from "./components/Letters";
import Shapes from "./components/Shapes";
import Settings from "./components/Settings";
import Nav from "./components/ui/Nav";
import Backdrop from "./components/ui/Backdrop";
import Sidebar from "./components/ui/Sidebar";
import { randomColors, randomNumbers, randomLetters, randomShapes } from './data';
import { useGlobalContext } from './context';

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
      <Backdrop />
      <Sidebar />
      <Nav />
      <main>
        <Switch>
          <Route path="/colors">
            <Colors randomColors={randomColors} />
          </Route>
          <Route path="/numbers">
            <Numbers randomNumbers={randomNumbers} />
          </Route>
          <Route path="/letters">
            <Letters randomLetters={randomLetters} />
          </Route>
          <Route path="/shapes">
            <Shapes randomShapes={randomShapes} />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
