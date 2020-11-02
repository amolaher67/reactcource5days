import { Component } from "react";
import PowerUp from "./powerup.component";

class PowerClick extends Component {
  constructor() {
    super();   
  }  
  render() {
    return (
      <button onClick={this.props.boostpower}>
        Power now is {this.props.power}
      </button>
    );
  }
}

export default PowerUp(PowerClick);
