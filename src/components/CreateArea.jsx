import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    
    const [isExpanded, setExpanded]=useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value  //this key:value pair.From ES6 keyvariable(i.e name) should enclose in square bracket. 
            }
        })
    }

    function expand(){
        setExpanded(true);
    }

    function submitNote(event) {
        //accessing this onAdd fn from createArea component in app 
        props.onAdd(note);
        //To clear the screen after adding the note
        setNote(
            {
                title: "",
                content: ""
            })
        //prevent the content of the page from refresh
        event.preventDefault();
    }
    return (
        <div>
            <form className='noteContainer createAreaDiv'>
            {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder='Title' /> }
              
                <textarea onClick={expand} onChange={handleChange} name="content" value={note.content} placeholder='Take a note...' rows={isExpanded?3:2} />
                
                <Zoom in={isExpanded}>
                   {/*floating action button fab*/}
                <Fab onClick={submitNote} className='btnCls'>
                   {/* material UI icon */}
                <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;