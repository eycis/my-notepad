import React, { useState } from "react";
import Particle from "./Particles";
import Note from "./Note";
import Nav from "./Nav"; // Importujeme komponentu Nav

interface NoteItem {
  id: number;
  title: string;
  content: string;
}

const Body = () => {
  const [notes, setNotes] = useState<NoteItem[]>([]);

  const addNote = (title: string) => {
    const newNote = { id: Date.now(), title, content: "• " };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="h-[90vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <Nav openNav={() => {}} addNote={addNote} /> {/* Přidáme prop addNote */}
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-5 gap-[1rem] h-[40%] items-center">
        {notes.map((note) => (
          <div
            key={note.id}
            className="h-[10rem] flex items-center justify-center bg-violet-400 shadow-lg rounded-lg cursor-pointer"
          >
            {note.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
