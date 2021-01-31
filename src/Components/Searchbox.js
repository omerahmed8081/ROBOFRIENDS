import React from 'react';
import 'tachyons';
const Searchbox=({searchchange})=>{
    return(
        <div className="pa2">
            <input 
            type='search'  
            className="tc pa3 ba b--green bg-lightest-blue"
             placeholder="Search Robots"
             onChange={searchchange}
             />
            
        </div>
    );
}
export default Searchbox;
