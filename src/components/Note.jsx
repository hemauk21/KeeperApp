import React from 'react';


function Note(Props){
return(
 <div className="note">
 <p><h1>{Props.title}</h1></p>
 <p>{Props.content}</p>
 </div>   
 
    
);
}
export default Note;