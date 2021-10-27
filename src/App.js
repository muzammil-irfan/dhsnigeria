import React from 'react'
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage/AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Management from "./components/Management/ManagementPage";
import Footer from "./components/Footer";


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
        </Switch>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
