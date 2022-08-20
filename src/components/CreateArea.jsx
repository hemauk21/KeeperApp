import React, { useState } from 'react';

function CreateArea(props) {

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
    function submitNote(event) {
        event.preventDefault();
           //accessing this onAdd fn from createArea component in app 
        props.onAdd(note);



    }

    return (

        <div>
            <form className='noteContainer createAreaDiv'>
                <input onChange={handleChange} name="title" value={note.title} placeholder='Title' />
                <textarea onChange={handleChange} name="content" value={note.content} placeholder='Take a note...' rows="3" />
                <button onClick={submitNote} className='btnCls'>Add</button>

            </form>
        </div>
    );
}

export default CreateArea;