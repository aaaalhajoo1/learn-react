import React, { Component } from 'react';



class Header extends Component{
   render(){
   // let World =" ";
    const wMap  ="USA";
    const location = {
        w_J:"japan",
        W_W :"world"

    }
     
    /*
    if(wMAp==="japan"){
        World = "hello japan"

    }else{
        World ="hello world "
    }*/
    
        return (
            
            <div className='navbar bg-primary '>
            <h1 className="text-white">Hello { wMap ==="japan" ? location.w_J:location.W_W} Map</h1>
            
            </div> 


        )
    }

}

export default Header;
