import React, { useState } from "react";
import { Link } from "react-router-dom";





const Header = () => {

    const [time, setTime] = useState("Loading")

    function upDate(){
        const updateTime = new Date().toLocaleTimeString();
        setTime(updateTime);
      }
      setInterval(upDate, 1000);

    

    return (
       <header>
           <nav>
               <img src="\images\logo.png"  alt = "logo" />
               <ul>
                  <Link to="/"><li>Home</li></Link> 
                  <Link to="/about" >  <li>About</li></Link> 
                  <li  >{time}</li>       
               </ul>
           </nav>
       </header>
    )
}


export default  Header 