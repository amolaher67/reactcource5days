import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor() {
    super();

    this.state = {
      power: 5,
    };
  }

  render() {
    //3 different ways for conditional rendering

    // if (this.state.power > 4) {
    //   return <h1>Hero needs power booster</h1>;
    // } else {
    //   return <h1>Hero ready to fight</h1>;
    // }

    // return this.state.power > 4 ? (
    //   <h1> Hero needs power booster </h1>
    // ) : (
    //   <h1>Hero ready to fight</h1>
    // );

    //&& use for inline rendering
    return this.state.power > 4 && <h1>Hero ready to fight</h1>;
  }
}
