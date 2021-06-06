import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Colors from './components/Colors';
import Numbers from "./components/Numbers";
import { randomColors, numbers } from './data'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/colors">
          <Colors randomColors={randomColors} />
        </Route>
        <Route path="/numbers">
          <Numbers numbers={numbers} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
