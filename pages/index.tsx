import React, { useState } from 'react'
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Note from '@/components/Note';

const HomePage = () => {
  //const [nav, setNav] = useState(false);
  // const openNav = () => setNav(true);
  // const closeNav = () => setNav(false);

  const [note, setAddNote] = useState(false);

  const handleAddNote = () =>{
    setAddNote(!note)
  }

  return (
    <div className='overflow-x-hidden'>
      {/* <MobileNav nav={nav} closeNav={closeNav} /> */}
      {/* <Nav openNav={openNav} addNote={handleAddNote} />  */}
      <Nav addNote={handleAddNote} />
      <Body/>

      {note && (
        <Note
          open={note}
          id = {1}
          title = "title"
          done = {false}
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