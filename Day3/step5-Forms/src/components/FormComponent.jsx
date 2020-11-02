import React, { Component } from "react";
import "./MyStyle.css";

export default class FormComponent extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      userage: 0,
      usernameMessage: "",
      userageMessage: "",
      usererrormessage: "",
    };
  }

  ChangeHandler = (event) => {
    debugger;
    console.log(event.target.value);
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  mySubmitHandler = (event) => {
    debugger;

    this.setState({ usererrormessage: "" });
    let isValid = true;

    event.preventDefault();
    if (this.state.username === "") {
      this.setState({ usernameMessage: "Please enter UserName" });
      isValid = false;
    } else {
      this.setState({ usernameMessage: "" });
    }
    if (this.state.userage <= 0) {
      this.setState({ userageMessage: "Please enter ager greater that 0" });
      isValid = false;
    } else {
      this.setState({ userageMessage: "" });
    }

    if (isValid)
      this.setState({ usererrormessage: "Form Submitted successfuly" });
      else
      this.setState({ usererrormessage: "" });
  };
  render() {
    return (
      <div className="box">
        <h1>Login Form</h1>
        <form name="loginForm" onSubmit={this.mySubmitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.ChangeHandler}
          />
          <br />

          <label htmlFor="userage">Age</label>
          <input
            name="userage"
            type="number"
            value={this.state.userage}
            onChange={this.ChangeHandler}
          />

          <br />
          <label htmlFor="password"></label>
          <input type="submit"></input>
        </form>
        <span> {this.state.usererrormessage}</span>
        <div id="errors">
          <ol>
            {this.state.usernameMessage !== "" ? (
              <li>{this.state.usernameMessage}</li>
            ) : (
              <span></span>
            )}
            {this.state.userageMessage !== "" ? (
              <li>{this.state.userageMessage}</li>
            ) : (
              <span></span>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
