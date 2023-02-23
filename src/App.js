import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
