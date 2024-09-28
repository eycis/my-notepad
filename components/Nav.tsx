import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

type Props = {
  addNote: () => void; }

const Nav = ({ addNote }: Props)  => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-white shadow-2xl">
      <div className="flex items-center justify-center w-[80%] mx-auto h-[100%]">
        <div className="hidden md:flex space-x-4">
          <div className="nav-link cursor-pointer" onClick={addNote}>
            Create
          </div>
          <div className="nav-link cursor-pointer">Contact</div>
        </div>
        {/* <div onClick={openNav}>
            <Bars3Icon className="w-8 md:hidden h-8 cursor-pointer text-violet-300" />
          </div> */}
      </div>
    </div>
  );
};

export default Nav;
