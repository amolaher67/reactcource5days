import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class FirstComponet extends Component {
  
    //way to define default prop value if prop does not send from Parent Component
    //reserve object defaultProps
    // static defaultProps = {
    //   message: "Default Message",
    // };
    
    
    render() {
      return <>
       <h1>{this.props.message}</h1>
       {this.props.count *2}
       </>;
    }
  }
  
  //Define propetypes to make sure we are dending correct value for property
  FirstComponet.propTypes={
    count: PropTypes.number.isRequired,
  }
  
  FirstComponet.defaultProps={
    message:"Default message again" 
  }
  
