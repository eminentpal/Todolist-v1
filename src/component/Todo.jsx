import React, { useState } from "react";
import List from "./List";



const Todo = () =>{

const [item, setItem]= useState();
const [Lists, setLists] = useState(["Pray", "Cook", "Code"]);


function handleChange (event){
    const newValue = event.target.value;
    setItem (newValue)
}

function handleClick () {
    setLists ( prevLists => {
        return [...prevLists, item]
    })
   setItem("")
}

// for delete

function deleteItem(id){
  setLists (prevLists => {
      return prevLists.filter( (item, index) => {
          return index !== id;
      });
  });
}

    return (

        <div>

       
        <div  className="todolist">


<div className="todolist2">
{Lists.map( (item, index) => (
   <List key={index} id={index} item={item.substring(0,23)} onDelete={deleteItem} />
     ))}

      
   
 
   {/* {  Lists.map( (item) => {
      
   } )
   } */}
 
   <div  className="todo" >
       <input value={item} onChange={handleChange} name="list" placeholder="Type Your Todo" type="text"  required="required"/>
       <button onClick={handleClick}  type="submit" >+</button>
   </div>
   
   

</div>
  
   </div>
        </div>
        
    )
}


export default Todo;