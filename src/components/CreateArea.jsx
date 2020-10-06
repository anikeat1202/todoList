import React, { useState } from "react"
import "../styles.css"


var CreateArea = function(props){

const[note,setNote] =useState({

title:"",
content:""

});


var handleChange =function(event){

const{name,value} =event.target

setNote((prevNote)=>{

return {
...prevNote,

[name] : value
}
})


}

var submitNote =function(event){
event.preventDefault();

props.onAdd(note)


}


return (

    <div>
     
     <form>

   <input name="title" onChange={handleChange} value={note.title} placeholder="Title" ></input>
   <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take A Note..." rows="3"></textarea>
    <button onClick={submitNote}>Add</button>
     </form>


    </div>


)



}

export default CreateArea