import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes((prevNotes) => {
            return ([...prevNotes, newNote]);
        })
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            //from filter fn we can get the index
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                //from map fn we can get the index
                return <Note
                    key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    );
}
export default App;
