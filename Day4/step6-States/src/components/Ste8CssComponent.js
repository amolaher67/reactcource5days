import React, { Component } from 'react'
//import '../styles/MyStyle.css'
import style from '../styles/MyStyle.Module.css'

//its object that we can create and use in render method
const styleprop = {
    fontFamily : 'Arial', 
    width:'400px', 
    height : '200px', 
    lineHeight : '200px',
    textAlign : 'center',
    backgroundColor : 'red', 
    background: 'linear-gradient(to bottom,  #b5bdc8 0%,#828c95 36%,#28343b 100%)' 
  }

export default class Ste8CssComponent extends Component {
    render() {
        return (
            <div className={style.box}>
                <h1 style={styleprop}>Testing Styles</h1>
            </div>
        )
    }
}
