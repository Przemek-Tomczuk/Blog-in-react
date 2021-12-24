import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Navbar, Home, Header, Essays } from "./components";
import Essay from "./components/Essay";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Switch>
        <Route exact path="/">
        <Redirect to="/Home" />
        </Route>
          <Route path="/Home" exact component={() => <Home />} />
          <Route path="/Essays" exact component={() => <Essays />} />
          <Route path="/Essay/:id" render={props => <Essay {...props} /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
