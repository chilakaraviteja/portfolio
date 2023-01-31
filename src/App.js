import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/">
              <NavBar />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
