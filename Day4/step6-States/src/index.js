import React from "react";
import ReactDom from "react-dom";
import {MainApp} from './Step13-HOC/MainApp'


ReactDom.render(
  <React.StrictMode>
    <MainApp></MainApp>
  </React.StrictMode>,
  document.getElementById("root")
);
