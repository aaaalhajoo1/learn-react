import React, { Component } from 'react'
import Header from './components/Header'
import Text from './components/Text'
import Header from './components/maps'
import States from "./components/states"
import Events from "./components/events"

class App extends Component{
  
  render(){

    return(
      <div>
 
        <States/>
        <Events/>
      </div>


    )
  }




}

export default App;