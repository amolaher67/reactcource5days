import React, { Component } from 'react'

export default class RefExampleComponent extends Component {

  constructor()
  {
      super();
      this.headingRef = React.createRef();
  }

  handlOnclick =()=>{

    console.log(this.headingRef);
  }

    render() {
        //one ref can be used with single html element 
        return (
            <div>
                
                <h1 ref={this.headingRef}>Welcome to Ref example React</h1>
                <h2 ref={this.headingRef}>Welcome to Ref example React</h2>
                <button onClick={this.handlOnclick}>ClickToChekcRef Value</button>
            </div>
        )
    }
}
