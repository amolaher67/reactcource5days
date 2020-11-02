import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {power:10};
    console.log("Parent. Constructor was called:", arguments);
  }

  static getDerivedStateFromProps() {
    console.log("Parent. getDerivedStateFromProps was called:", arguments);
    return null;
  }

  componentDidMount() {
    console.log("Parent. componentDidMount was called:", arguments);
  }

  handleChange = () => {
    return null;
  };

  render() {
    console.log("Parent. render was called:", arguments);
    return <ChildComponent onClickHandler={this.handleChange} args = {this.state.power}></ChildComponent>;
  }
}
