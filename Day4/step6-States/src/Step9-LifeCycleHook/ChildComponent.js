import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
        console.log("Child. Constructor was called:", arguments);
      }
    
      static getDerivedStateFromProps() {
        console.log("Child. getDerivedStateFromProps was called:", arguments);
        return null;
      }
    
      componentDidMount() {
        console.log("Child. componentDidMount was called:", arguments);
      }
    
      render() {
        console.log("Child render was called:", arguments);
        return (<div><h1>From Child Component</h1>
               <h1>Parent Props {this.props.args}</h1></div>)
      }      
}
