import React, { Component } from "react";
import ReactDOM from "react-dom";
import PowerBoost from './step1/powerboost.component';
import PowerClick from './step1/powerclick.component';
class MainApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Welcome to your life</h1>
        <PowerClick />
        <PowerBoost></PowerBoost>
      </div>
    );
  }
}




export {MainApp}
