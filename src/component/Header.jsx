import React, { useState } from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import Mobile from "./Mobile"





const Header = () => {




    const [time, setTime] = useState("Loading");
   const [toggle, setToggle] = useState(false)


    function upDate(){
        const updateTime = new Date().toLocaleTimeString();
        setTime(updateTime);
      }
      setInterval(upDate, 1000);

    function clickToggle(){
        setToggle(true)
    }

    function clickToggle1(){
        setToggle(false)
    }

 


    return (
       <header>
           <nav>
               <img src="\images\logo.png"  alt = "logo" />
             
              <ul    >
               
              <Media query="(max-width:800px)" >
               {(matches => {
                return  matches ? <div style={{ display: toggle ? "block " : "none"}} > <Mobile /></div>   : null;
               })}
              </Media>
               
               <Link className="hid" to="/"><li>Home</li></Link> 
               <Link className="hid" to="/about" >  <li>About</li></Link> 
              
              
               <li  >{time}</li> 
               
            </ul>
            
               
               { toggle ? <img   src="\images\menu.png" className="imag" onClick={clickToggle1} alt ="" /> : <img  src="\images\menu.png" className="imag" onClick={clickToggle} alt =""  /> }  
               
           </nav>
       </header>
    )
}


export default  Header 