import React, { useEffect, useState } from 'react'
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Note from '@/components/Note';
import { model, NoteType } from '@/components/NoteProps';

const HomePage = () => {
  //const [nav, setNav] = useState(false);
  // const openNav = () => setNav(true);
  // const closeNav = () => setNav(false);

  const [note, setOpenNote] = useState(false);
  const [notes, setNotes] = useState<NoteType[]>([]); //zobrazení poznámek v Body
  const [selectedNote, setSelectedNote] = useState<NoteType | null>(null);

  const handleAddNote = () =>{
    setOpenNote(!note);
  }

  const handleToggleNote = (toggledNote : NoteType) => {
    setSelectedNote(toggledNote);
    setOpenNote(!note);
  }

  const handleSaveNote = ( title: string, content: string, done: boolean) =>{
    if (selectedNote){
      console.log("editing note");
      console.log(notes);
      setNotes((prevNotes) => [...notes]);
    }
    else{
      console.log("saving new note");
      const newNote = {
        id: Date.now(),
        title,
        content,
        done
    }
    setNotes((prevNotes) => [...notes, newNote]);
    }
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
          open={note}
          handleClose={handleAddNote}
          saveNote={(title, content, done) => {
            console.log('Saving note:', { title, content, done });
            handleSaveNote(title, content, done);
          }}
        />
      )}
     {/* <Footer/> */}
    </div>
  )
}

export default HomePage