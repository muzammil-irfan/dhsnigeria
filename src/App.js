import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Fees from "./components/Fees";
import AboutPage from "./components/AboutPage/AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Management from "./components/Management/ManagementPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import NewFees from "./components/Fees";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/management">
            <Management />
          </Route>
          <Route exact path="/fees">
            <Fees />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route><Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
