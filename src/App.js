import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <NavBar />
        {/* <Switch>
          <Route exact path="/"> */}
        <Home />
        {/* </Route> */}
        {/* <Route path="/about-me"> */}
        <AboutMe />
        {/* </Route> */}
        {/* <Route path="/contact"> */}
        {/* <Contact /> */}
        {/* </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
