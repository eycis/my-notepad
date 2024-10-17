import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { FiPlusCircle } from 'react-icons/fi';

type Props = {
  addNote: () => void; }

const Nav = ({ addNote }: Props)  => {
  return (
    <div className="w-[100%] fixed z-50 top-0 h-[12vh] bg-[#F4A261] shadow-2xl rounded-b-3xl flex items-center justify-center">
       <div className="relative w-full h-full flex justify-center items-center">
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={addNote}
        >
          <FiPlusCircle className="w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
        </button>
          {/* <div className="nav-link cursor-pointer">Contact</div> */}
        </div>
        {/* <div onClick={openNav}>
            <Bars3Icon className="w-8 md:hidden h-8 cursor-pointer text-violet-300" />
          </div> */}
      </div>
  );
};

export default Nav;

