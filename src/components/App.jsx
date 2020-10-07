import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes"
import CreateArea from "./CreateArea";



var App=function(){


    const[notes,setNotes]=useState([])


    var addNote = function(newNote){

        setNotes((prevNotes)=>{

      return    [...prevNotes,newNote]
     

        })

    }

    var deleteNote=function(id){
  
   setNotes((prevNotes)=>{

  return  prevNotes.filter((noteItem,index)=>{
   
        return index!==id

    })

   })

    }

return <div><Header></Header> 
<CreateArea onAdd={addNote}></CreateArea>
{notes.map((noteItem,index)=>{

return <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>

})}

<Footer></Footer>
</div>

}


export default App;
