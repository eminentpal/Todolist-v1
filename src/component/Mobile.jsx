import React from "react";
import { Link } from "react-router-dom";



function Mobile (){
    return <div   >
        <Link to="/"><li>Home</li></Link> 
               <Link to="/about" >  <li>About</li></Link> 
    </div>
}




export default Mobile;