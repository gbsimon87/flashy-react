import {
  Switch,
  Route,
} from "react-router-dom";

import { randomColors } from './data'
import Home from './components/Home';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/colors">
          <Colors randomColors={randomColors} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
