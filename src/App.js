import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import Partnerships from "./Partnerships/Partnerships";
import Home from "./HomePage/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/partnerships" component={Partnerships} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
