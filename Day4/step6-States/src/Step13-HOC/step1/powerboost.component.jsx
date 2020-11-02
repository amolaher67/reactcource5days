import { Component } from "react";
import PowerUp from "./powerup.component";

class PowerBoost extends Component {
  constructor(props) {
    super(props);
     
  }

  render() {

    let { power, boostpower } = this.props;

    console.log(this.power, this.boostpower);
    return (
      <div
        style={{
          width: "150px",
          height: "50px",
          backgroundColor: "orange",
          border: "1px solid black",
          lineHeight: "50px",
          textAlign: "center",
        }}
        onMouseMove={boostpower}
      >
        Power now is {power}
      </div>
    );
  }
}

export default PowerUp(PowerBoost);
