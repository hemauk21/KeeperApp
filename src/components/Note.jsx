import React from 'react';


function Note(props){
return(

 <div className="noteContainer noteDiv">
 <p><h1>{props.title}</h1></p>
 <p>{props.content}</p>
<button className="btnCls">Delete</button>
 </div>   
  
    
);
}
export default Note;