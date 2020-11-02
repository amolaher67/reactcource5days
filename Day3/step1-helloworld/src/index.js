import React from 'react'
import ReactDom from 'react-dom'

// let el = React.createElement("ul",{id:"TestiId1"},[

//   React.createElement("li",{key:1},"Test1"),
//   React.createElement("li",{key:2},"Test1"),
//   React.createElement("li",{key:3},"Test1"),
//   React.createElement("li",{key:4},"Test1")]

// );



const heroes=['BatMan','ShaktiMan','SpiderMan','RajniKanta'];
let elm= React.createElement("ol",null,heroes.map(function(val,index,arr){
  return React.createElement("li",{key:index},val);
}));

ReactDom.render(elm,document.getElementById('root'));

//html5 allowed to create custom tags 