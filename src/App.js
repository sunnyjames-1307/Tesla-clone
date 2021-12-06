import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModelS from "./components/ModelS/ModelS";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/model-S">
            <ModelS />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
