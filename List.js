import React from 'react';
import Maps  from './maps';

function List(){
    return (
        <ul className ="list-group">
            <Maps
            M={{
                mmap:"Thematic maps",
                 id:"thematic maps",
                 img:"https://picsum.photos/200",
                
            }}/>
            <Maps
            M={{
                mmap:"Historical map",
                 id:"historical map",
                 img:"https://picsum.photos/200",
                
            }}/>

           <Maps
            M={{
                mmap:"Map projections",
                 id:"map projections",
                 img:"https://picsum.photos/200",
                
            }}/>
            
        </ul>

    )

}




export default List;