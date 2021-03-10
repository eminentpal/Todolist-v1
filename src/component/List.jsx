import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';







const List = (props) => {


function handleDelete (){
    props.onDelete(props.id)
}


const check = {
    right:"10px",
    position:"relative",
    margin:"0",
    top:"2px"
}

    return (
        <div className="list">
            <ul>
                <li  ><CheckIcon style={check} />{props.item}</li>
            </ul>
           <button onClick={handleDelete}><DeleteIcon /></button> 
           
        </div>
    )
}


export default List ;