import React, { useState } from 'react'
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='overflow-x-hidden'>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} addNote={handleAddNote} />
      <Body/>
      <Footer/>
    </div>
  )
}

export default HomePage