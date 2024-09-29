import React, { useState } from "react";
import Note from "./Note";
import { FiCheckCircle } from "react-icons/fi";
import { model, NoteType } from "./NoteProps";

type BodyProps = {
  noteList: NoteType[];
}

const Body = ({noteList} : BodyProps) => {

  // const handleNote = () => {
  //     console.log("note opened");
  //     SetNoteOpen(!noteOpen)
  // }

  // const handleNoteClick = (note: NoteItem) => {
  //   setEditingNote(note);
  //   setIsModalOpen(true);
  // };
  
  return (
    <div className="ciclePosition w-[590px] h-[400px] bg-red-500 rounded-[100%] absolute z-1 top-[50%]
    left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px] ">
      {/* <Nav openNav={() => {}} addNote={() => setIsModalOpen(true)} /> */}
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-5 gap-4  lg:h-[50%] items-center">

        {noteList.map((note) => (
          <div
            key={note.title}
            className=" relative h-[10rem] flex flex-col items-center justify-center bg-red-400 shadow-lg rounded-lg cursor-pointer"
            //nClick={handleNote} 
          >

        <h3 className="text-xl">{note.title}</h3>
        {note.done && (
          <div className="absolute bottom-0 -right-2 bg-grey-500 text-white rounded-full p-1">
            <FiCheckCircle size={24} />
          </div>
        )}
      </div>
        ))}
      </div>
      </div> 

  );
};

export default Body;