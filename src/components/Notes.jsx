import React from "react";
import notes from "../notes"
import CreateArea from "./CreateArea"
import "../styles.css"

var Notes=function(props){


var deleteNote =function(){

props.onDelete(props.id);

}


return   <div className="note">
<h1>{props.title}</h1>
<p>{props.content}</p>
<button onClick={deleteNote}>DELETE</button>
</div>
}

export default Notes;