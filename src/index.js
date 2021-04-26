import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from "./components/Header";
import Middle from "./components/Middle";
import App from "./App";
import Last from "./components/Last";
import Grade from "./components/Grade";
import {BrowserRouter, BrowserRouter as Switch,Route} from "react-router-dom";
import Otp from "./components/Otp"


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Switch>
    <Route exact path="/Otp">
    <Otp  />
    </Route>
  </Switch>
  </BrowserRouter>
    <Header />
     <Middle />
      <Last />
     <Grade />
     {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


