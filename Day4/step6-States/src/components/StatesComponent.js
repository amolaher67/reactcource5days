import React, { Component } from "react";

export default class StatesComponent extends Component {
  constructor() {
    super();

    this.state = {
      power: 10,
    };
  }

  /*IncreasePower = ()=>{
    this.setState({
        power:this.state.power+1
    },
    function() //this function imediately called
    {
         console.log(this.state.power);
    });

    //this will result into issue - value will not update as soon as its changed in setstate
    console.log(this.state.power);
}*/

  IncreasePower = () => {
    //this.setState with function
    this.setState(
      (prevState, compProps) => ({ power: prevState.power + 1 }),
      () => {
        console.log(this.state.power);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>{this.state.power}</h1>
        <button onClick={this.IncreasePower}>Increase power</button>
      </div>
    );
  }
}
