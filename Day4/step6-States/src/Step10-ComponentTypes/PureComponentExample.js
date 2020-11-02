import React, { Component } from "react";
import PureChildComponent from "./PureChildComponent";

export default class PureComponentExample extends Component {
  localClassField = 10;

  constructor() {
    super();
    this.state = { power: 10 };
  }

  changeHandler = () => {
    this.setState({ power: 11 });
    
  };

  render() {

    
    console.log("Regular Compoenet render called");
    return (
      <div>
        <h1>Power from Parent Component is : {this.state.power}</h1>
        <button onClick={this.changeHandler}>Change State value</button>
        <hr></hr>
        <PureChildComponent power={this.state.power}></PureChildComponent>

        <h1>
          Check if local property changes call render or not
          {this.localClassField}
        </h1>
      </div>
    );
  }
}
