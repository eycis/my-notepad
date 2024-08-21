import React, { useState } from 'react';
import Note from './Note';

interface Props {
  openNav: () => void;
  addNote: () => void; 
}

const Nav = ({ openNav, addNote }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.8] cursor-pointer text-[25px] text-white font-bold">
          My <span className="text-violet-400">Notepad</span>
        </h1>
        <div className="hidden md:flex space-x-4">
          <div className="nav-link cursor-pointer" onClick={addNote}>
            Create
          </div>
          <div className="nav-link cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
