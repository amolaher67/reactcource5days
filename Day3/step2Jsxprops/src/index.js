import React, { Component } from "react";
import ReactDom from "react-dom";
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import StateExampleComponent from "./components/StateExampleComponent";

/*
//this is jsx
let elm = (<>
  <ol>
    <li className="box">Test 1</li>
    <li>Test 2</li>
    <li>Test 3</li>
    <li>Test 4</li>
    <li>Test 5</li>
    <li>Test 5</li>

    <label htmlFor="uname">username</label>
    <input id="uname" type="text"></input>

    <label htmlFor="upas">Passsword</label>
    <input id="upas" type="password"></input>

  </ol>

<ol>
<li className="box">Test 1</li>
<li>Test 2</li>
<li>Test 3</li>
<li>Test 4</li>
<li>Test 5</li>
<li>Test 5</li>

<label htmlFor="uname">username</label>
<input id="uname" type="text"></input>

<label htmlFor="upas">Passsword</label>
<input id="upas" type="password"></input>

</ol></>
);

//htmlFor should be used instead of for ->html5 reserve word
//we cant use class keywor
// html will allow tag without closing tag which dont allowd  child element - we have to close here

ReactDom.render(elm, document.getElementById("root"));

//html5 allowed to create custom tags

*/
//step3
// const appname = "My Hero App";
// const heroes = ["IronMan", "SpiderMan", "AntMan", "Hulk"];

// class Header extends Component {
//   render() {
//     return <h1>{appname}</h1>;
//   }
// }

// class List extends Component {

//   render() {
//     return (
//       <div>
//         <ul>
//           {
//           this.props.heroes.map(function (val, index) {
//             return <li key={index}>{val}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// class MyComponent extends Component {
//   //return jsx object
//   render() {
//     //return <h1>Hello from MyComponent</h1>;
//     return (
//       <>
//         <Header></Header>
//         <List heroes={heroes}></List>
//         <List heroes={heroes}></List>
//       </>
//     );
//   }
// }

//console.log(<MyComponent />); //it wil print object of jsx

//ReactDom.render(<MyComponent />, document.getElementById("root"));

//props2



class MainComponet extends Component {

 //declare prop
  message="value form Main Component";

  render() {
    return (
      <>
        <FirstComponent count={10} ></FirstComponent>
        <SecondComponent></SecondComponent>
        <StateExampleComponent></StateExampleComponent>
      </>
    );
  }
}

ReactDom.render(

<React.StrictMode>
<MainComponet /></React.StrictMode>, document.getElementById("root"));
