import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import searchbooks from "./pages/searchbooks";
import noMatch from "./pages/noMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={searchbooks} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route component={noMatch} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;