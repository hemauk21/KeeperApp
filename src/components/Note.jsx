import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="noteContainer noteDiv">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick={handleClick} className='btnCls'>
            {/* material UI icon */}
            <DeleteIcon />
            </Fab>
         
        </div>
    );
}
export default Note;