import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { NoteType } from "./NoteProps";

type BodyProps = {
  noteList: NoteType[];
  clickNote: (note) => void;
}

const Body = ({noteList, clickNote} : BodyProps) => {
  return (
    <div className="absolute w-full h-full  overflow-y-scroll bg-[#FFE8D6] flex justify-start">
      {/* <Nav openNav={() => {}} addNote={() => setIsModalOpen(true)} /> */}
      <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 w-3/4 py-40 px-4 sm:px-10 mt-20 lg:px-20 items-center mx-auto">
        {noteList.map((note) => (
          <div
            key={note.id}
            className=" relative h-[10rem] flex flex-col items-center justify-center 
            bg-${note.color} shadow-neutral-500 shadow-2xl rounded-3xl text-white cursor-pointer"
            onClick={() => {clickNote(note)}}
            style={{ backgroundColor: note.color }}
          >
          <h3 className="font-bold sm:tex lg:text-xl">{note.title}</h3>
          {note.done && (
            <div className="absolute bottom-0 -right-2 bg-grey-500 text-white rounded-full p-1">
              <FiCheckCircle size={45} />
            </div>
          )}
          </div>
        ))}
        </div>
      </div> 
  );
};

export default Body;