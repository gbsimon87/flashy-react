import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Colors from './components/Colors';
import Numbers from "./components/Numbers";
import Letters from "./components/Letters";
import Shapes from "./components/Shapes";
import { randomColors, randomNumbers, randomLetters, randomShapes } from './data'

function App() {
  return (
    <div className="App">
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
