import { Component } from "react";

let PowerUp = (OriginalComponent) => {

    class NewComponent extends Component{

        constructor(){
            super()
            this.state = {
              power : 0
            }
          }
        
          increasePower = () => {
            this.setState((beforeBoost) => {
                return {
                  power : beforeBoost.power+1
                }
            })
          }

        render(){
            return <OriginalComponent power= {this.state.power} boostpower= {this.increasePower}/>
        }
    }

    return NewComponent
}

export default PowerUp