import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Colors from './components/Colors';
import Numbers from "./components/Numbers";
import Letters from "./components/Letters";
import { randomColors, randomNumbers, randomLetters } from './data'

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
