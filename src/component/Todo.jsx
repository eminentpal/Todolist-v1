import React, { useState } from "react";
import List from "./List";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const Todo = () =>{

    

const [item, setItem]= useState("");
const [Lists, setLists] = useState(["Pray", "Cook", "Code"]);



function handleChange (event){
    const newValue = event.target.value;

    setItem (newValue)
}

function handleClick () {

    if (item === "") {
        alert("Please type your Todo");
        return false;
      }
      else {
        setLists ( prevLists => {
            return [...prevLists, item]
        })
       setItem("")
      }
    
}

// for delete

function deleteItem(id){
  setLists (prevLists => {
      return prevLists.filter( (item, index) => {
          return index !== id;
      });
  });
}

const add = {
    right:"10px",
    position:"relative",
    margin:"0",
    top:"2px",
    color: "teal",
}


    return (

        <div>

       
        <div  className="todolist">


<div className="todolist2">
{Lists.map( (item, index) => (
   <List key={index} id={index} item={item.substring(0,15)} onDelete={deleteItem} />
     ))}

      
   
 
   {/* {  Lists.map( (item) => {
      
   } )
   } */}
 
   <div  className="todo" >
 
       <input   value={item} onChange={handleChange} name="list" placeholder="Type Your Todo" type="text"  required="required"/>
       <button onClick={handleClick}  type="submit" ><AddCircleOutlineIcon style={add} /></button>
    
   </div>
   
   

</div>
  
   </div>
        </div>
        
    )
}


export default Todo;