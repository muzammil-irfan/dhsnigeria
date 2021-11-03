import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Fees from "./components/Fees";
import AboutPage from "./components/AboutPage/AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Management from "./components/Management/ManagementPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <>
      <Router>
        <Navbar />
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
