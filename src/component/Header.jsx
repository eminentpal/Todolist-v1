import React, { useState } from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import Mobile from "./Mobile";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';





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
            
            <Media query="(max-width:700px)" >
               {(matches => {
                return  matches ? <div > { toggle ?   <FormatAlignRightIcon className="imag"   onClick={clickToggle1} />   : <FormatAlignLeftIcon className="imag" onClick={clickToggle}  />  }   </div>   : null;
               })}
              </Media>
               
               
               
              
           </nav>
       </header>
    )
}


export default  Header 