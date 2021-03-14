
import React from "react";
import About from "./About";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <Router>
     <div className="app">

     <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />

      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
