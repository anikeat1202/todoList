import React from "react";
import "../styles.css";
import DeleteIcon from '@material-ui/icons/Delete';

var Notes=function(props){


var deleteNote =function(){

props.onDelete(props.id);

}

return   <div className="note">
<h1>{props.title}</h1>
<p>{props.content}</p>
<button onClick={deleteNote}><DeleteIcon></DeleteIcon></button>
</div>
}

export default Notes;