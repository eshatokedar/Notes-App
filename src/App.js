import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes,setNotes]=useState([]);

  function addNote(newNote){
    setNotes((prevNotes)=>{
      return ([...prevNotes, newNote]);
    });
  }

  function deletenote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,noteIndex)=>{
        return noteIndex!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,index) =>{
      return(
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deletenote}
        />
      )
})}
      <Footer />
    </div>
  );
}

export default App;
