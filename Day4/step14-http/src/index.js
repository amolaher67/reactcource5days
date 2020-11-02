import React, { Component } from "react";
import ReactDom from "react-dom";
import axios from "axios";

export default class MainApp extends Component {
  constructor() {
    super();
    this.state = { herose: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:2525/")
      .then((response) => {
        this.setState({ herose: response.data.herolist });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.herose.map((val, idx) => {
          return <li key={idx}>{val}</li>;
        })}
      </div>
    );
  }
}

ReactDom.render(<MainApp />, document.getElementById("root"));
