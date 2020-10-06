import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes"

var noteEntry = (note)=>{

return <Notes key={note.id} title={note.title} content={note.content}></Notes>

}

var App=function(){


return <div><Header></Header> 
{notes.map(noteEntry)}
<Footer></Footer>
</div>

}


export default App;
