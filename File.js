import React, { Component } from 'react'


class File extends Component{
  
    method(name1){
          return <span >{name1}</span> }
      
        
    render(){  
        return(

            <h1>{this.props.name1}{this.props.name2}</h1>
             
            )

    }
 

}



export default File;





