import React, { Component } from "react";

export default class StateExampleComponent extends Component {
  constructor() {
    //we have to call super if we use state
    super();

    this.state = {
      title: "My Title",
      power: 1,
    };

    this.state.title = "Test";
  }

  changeHandler = () => {
    this.setState({
      power: this.state.power + 1,
    });
  };



  changeHandlerByEvent = (event) => {

    //event.target
    //event.type
    //event.currentTarget

    this.setState({
      power: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.title} | {this.state.power}
        </h1>
   
        <input type="range" min="1" max="10" value={this.state.power} onChange={this.changeHandlerByEvent}></input>
        <button onClick={this.changeHandler}>Add Power</button>
      </div>
    );
  }
}

/*
<button onClick={()=>{this.changeHandler()}}>Click Me</button>
<button onClick={()=>{this.changeHandler.bind(this)}}>Click Me</button>

or 

inside constructor

this.changeHandler = this.changeHandler.bind(this);

*/
