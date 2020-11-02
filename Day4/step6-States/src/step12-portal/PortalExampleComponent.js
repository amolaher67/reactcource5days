//https://reactjs.org/docs/portals.html
import React, { Component, ReactDOM } from "react";

export default class PortalExampleComponent extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to React Life</h1>
      </div>
    );
  }
}

export class OutSideElementComponent extends Component {
  render() {
    //we have another div outside of react root div
    return ReactDOM.createPortal(
      <h1>From CreatePortal</h1>,
      document.getElementById("popup")
    );
  }
}
