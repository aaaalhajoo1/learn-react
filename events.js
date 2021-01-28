import React, { Component } from 'react'

class Events extends Component{
    constructor(){
      super();
      this.state={number:0}
      this.clickHandler=this.clickHandler.bind(this);
      
    }

    clickHandler(){
        this.setState(prevstate=>{
            return {number:prevstate.number +1}
        })

    }
    render(){
      return(
        <div>
           <h1>{this.state.number}</h1>
           <button onClick={this.clickHandler}>click me</button>
        </div>


      )
    }



}

export default Events