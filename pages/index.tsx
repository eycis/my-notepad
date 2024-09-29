import React, { useState } from 'react'
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

  const [note, setAddNote] = useState(false);
  const [notes, setNotes] = useState<NoteType[]>([]);

  const handleAddNote = () =>{
    setAddNote(!note);
  }

  const handleSaveNote = ( title: string, content: string, done: boolean) =>{
    const newNote = {
      id: Date.now(),
      title,
      content,
      done
    }
    setNotes([...notes, newNote]);
    setAddNote(!note);
  }

  return (
    <div className='overflow-x-hidden'>
      {/* <MobileNav nav={nav} closeNav={closeNav} /> */}
      {/* <Nav openNav={openNav} addNote={handleAddNote} />  */}
      <Nav addNote={handleAddNote} />
      <Body noteList={notes}/>

      {note && (
        <Note
          open={note}
          handleClose={handleAddNote}
          saveNote={(title, content, done) => {
            console.log('Saving note:', { title, content, done });
            handleAddNote();
          }}
        />
      )}
     {/* <Footer/> */}
    </div>
  )
}

export default HomePage