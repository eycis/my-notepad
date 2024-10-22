import React, { useEffect, useState } from 'react'
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Body from '@/components/Body';
import Note from '@/components/Note';
import { model, NoteType } from '@/components/NoteProps';
import { randomColorSelector } from '@/styles/colorList'; 

const HomePage = () => {
  //const [nav, setNav] = useState(false);
  // const openNav = () => setNav(true);
  // const closeNav = () => setNav(false);

  const [note, setOpenNote] = useState(false);
  const [notes, setNotes] = useState<NoteType[]>([]); //zobrazení poznámek v Body
  const [selectedNote, setSelectedNote] = useState<NoteType | null>(null);
  const [initialized, setInitialized] = useState(false); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
      setInitialized(true); // pro provedení inicializace poznámek po obnovení
    }
  }, []);

  useEffect(() => {
    if (initialized && typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes, initialized]);

  const handleAddNote = () =>{
    setOpenNote(!note);
  }

  const handleToggleNote = (toggledNote : NoteType) => {
    setSelectedNote(toggledNote);
    setOpenNote(true);
  }

  const handleSaveNote = ( title: string, content: string, done: boolean, color: string) =>{
    if (selectedNote){
      const updatedNote = (notes.map((note) =>
          note.id === selectedNote.id ? { ...note, title, content, done } : note
        )
      );
      setNotes(updatedNote);
    }
    else{
      const newNote = {
        id: Date.now(),
        title,
        content,
        done,
        color: randomColorSelector()        
    }
      setNotes((prevNotes) => [...notes, newNote]);
    }
    setSelectedNote(null);
    setOpenNote(!note);
  }

  const handleDeleteNote = (id: number) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex(note=> note.id == id)
    if (index > -1) {
      tempNotes.splice(index, 1)
    }
    else if(!index || index == undefined){
      setOpenNote(!note)
    }
    setNotes(tempNotes);
    setSelectedNote(null);
    setOpenNote(!note);
  }
  
  const closeNote = () => {
    setOpenNote(!note);
  }

  return (
    <div className='overflow-x-hidden'>
      {/* <MobileNav nav={nav} closeNav={closeNav} /> */}
      {/* <Nav openNav={openNav} addNote={handleAddNote} />  */}
      <Nav addNote={handleAddNote} />
      <Body noteList={notes} clickNote={handleToggleNote}/>

      {note && (
        <Note
        handleClose = {closeNote}
        open={note}
        note={selectedNote}
        saveNote={handleSaveNote}
        deleteNote={handleDeleteNote}
        />
      )}
    </div>
  )
}

export default HomePage