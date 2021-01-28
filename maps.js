import React from 'react';

function maps(props){
    return (
        
        <li className="list-group-item">
            <label >
            <img src="https://picsum.photos/100"alt="map"/> 
            <input type="checkbox" id={props.M.id}
            htmlfor ={props.M.mmap}/>
            {props.M.mmap}
            </label>
        </li>

    

    )

}

export default maps;