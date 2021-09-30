import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Header, Bio, Books, Aphorisms, Essays, Quotes, Shorts } from "./components";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/Home" exact component={() => <Home />} />
          <Route path="/Aphorisms" exact component={() => <Aphorisms />} />
          <Route path="/Bio" exact component={() => <Bio />} />
          <Route path="/Books" exact component={() => <Books />} />
          <Route path="/Essays" exact component={() => <Essays />} />
          <Route path="/Quotes" exact component={() => <Quotes />} />
          <Route path="/Shorts" exact component={() => <Shorts />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
