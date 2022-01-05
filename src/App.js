import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./Common/Header/Header.jsx";
import Home from "./Components/Home/Home";
import Footer from "./Common/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
