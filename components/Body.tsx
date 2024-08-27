import React, { useState } from "react";
import Particle from "./Particles";
import Note from "./Note";
import Nav from "./Nav"; 
import { FiCheckCircle } from "react-icons/fi";

interface NoteItem {
  id: number;
  title: string;
  content: string;
  done: boolean;
}

const Body = () => {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [editingNote, setEditingNote] = useState<NoteItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (title: string, content: string, done: boolean) => {
    const newNote = { id: Date.now(), title, content, done};
    setNotes([...notes, newNote]);
    setEditingNote(null);
    setIsModalOpen(true);  
  };

  const editNote = (id: number, title: string, content: string, done: boolean) => {
    setNotes(
      notes.map(
        note => note.id === id ? { id, title, content, done } : note
      )
    );
  };

  // const handleMarkAsDone = (id: number) => {
  //   setNotes(
  //     notes.map((note)=>
  //       note.id === id? { ...note, done:true} :note
  //     )
  //   );
  // };

  const handleNoteClick = (note: NoteItem) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = (title: string, content: string, done: boolean) => {
    if (editingNote) {
      editNote(editingNote.id, title, content, done);
    } else {
      addNote(title, content, done);
    }
    setEditingNote(null);
  };
  
  return (
    <div className="h-[90vh] bg-gray-950 mt-[10vh] bg-cover bg-center">
      <Particle />
      <Nav openNav={() => {}} addNote={() => setIsModalOpen(true)} />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-5 gap-[1rem]  lg:h-[50%] items-center">
        {notes.map((note) => (
          <div
            key={note.id}
            className=" relative h-[10rem] flex flex-col items-center justify-center bg-violet-400 shadow-lg rounded-lg cursor-pointer"
            onClick={() => handleNoteClick(note)} 
          >
            <h3 className="text-xl">{note.title}</h3>
            {note.done && (
              <div className="absolute bottom-0 -right-2 bg-green-500 text-white rounded-full p-1">
                <FiCheckCircle size={24} />
              </div>
            )}
          </div>
        ))}
      </div>

      <Note
        open={isModalOpen}
        handleClose={() => { setIsModalOpen(false); setEditingNote(null); }}
        saveNote={handleSaveNote}
        note={editingNote || undefined}
      />
    </div>
  );
};

export default Body;