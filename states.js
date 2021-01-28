import React, { Component } from 'react'


class states extends Component{


    constructor(){
      super()
      this.state ={answer:"yes"}
    }
    render(){

      return(

        <h1>test {this.state.answer}</h1>


      )
    }




}

export default states