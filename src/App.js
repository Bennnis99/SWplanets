import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Coruscant from "./components/Coruscant";
import Hoth from "./components/Hoth";
import Tatooine from "./components/Tatooine";
import Naboo from "./components/Naboo";
import Kamino from "./components/Kamino";
import Alderaan from "./components/Alderaan";
import Mustafar from "./components/Mustafar";
import Geonosis from "./components/Geonosis";

function App() {
  return (
    <Router basename="/planets">
      <div className="App">
        <nav>
          <h2 id="navName">planets</h2>
          {/* <div id="navDiv"> */}
            <Link to="/coruscant" id="plan1" className="navButtons">Coruscant</Link>
            <Link to="/hoth" id="plan2" className="navButtons">Hoth</Link>
            <Link to="/tatooine" id="plan3" className="navButtons">Tatooine</Link>
            <Link to="/naboo" id="plan4" className="navButtons">Naboo</Link>
            <Link to="/kamino" id="plan5" className="navButtons">Kamino</Link>
            <Link to="/alderaan" id="plan6" className="navButtons">Alderaan</Link>
            <Link to="/mustafar" id="plan7" className="navButtons">Mustafar</Link>
            <Link to="/geonosis" id="plan8" className="navButtons">Geonosis</Link>
            <p id="navLine"></p>
        </nav>
        <Switch>
            <Route path="/coruscant">
              <Coruscant />
            </Route>
            <Route path="/hoth">
              <Hoth />
            </Route>
            <Route path="/tatooine">
              <Tatooine />
            </Route>
            <Route path="/naboo">
              <Naboo />
            </Route>
            <Route path="/kamino">
              <Kamino />
            </Route>
            <Route path="/alderaan">
              <Alderaan />
            </Route>
            <Route path="/mustafar">
              <Mustafar />
            </Route>
            <Route path="/geonosis">
              <Geonosis />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
