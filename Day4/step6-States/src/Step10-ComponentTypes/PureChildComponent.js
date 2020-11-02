import React, { PureComponent } from "react";

export default class PureChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {

    //this will not get called when props values are same 
    console.log('Pure Compoenet render called');
    return (
      <div>
        <h1>Power from Child Component is : {this.props.power}</h1>
      </div>
    );
  }
}
