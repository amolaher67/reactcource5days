import React, { Component } from "react";

export default class SecondComponent extends Component {
  render() {
    return (
      <div>
         <h1>{this.props.message}</h1> 
      </div>
    );
  }
}
