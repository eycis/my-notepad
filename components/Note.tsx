import React, { useEffect, useState } from 'react';
import {Modal } from '@mui/material';
import { NoteType } from './NoteProps';


const Note = ({ open, note, saveNote, deleteNote, handleClose }: { open: boolean; note: NoteType | null; 
  saveNote: (title: string, content: string, done: boolean, color: string) => void; 
  deleteNote: (id: number) => void; 
  handleClose: () => void; }) => {

  const [title, setTitle] = useState<string>(note?.title || 'New Note');
  const [content, setContent] = useState<string>(note?.content || '• New content');
  const [done, setDone] = useState<boolean>(note?.done || false)
  const [color, setColor] = useState<string>(note?.color|| '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setDone(note.done || false);
      setColor(note.color);
    } else {
      setTitle('New Note');
      setContent('• New content');
      setDone(false);
      setColor('');
    }}, 
      [note]);

  const handleContentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setContent((prevContent) => prevContent + '\n• ');
    }
  };

  return (
    <Modal open={open}>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
       w-full sm:w-[90%] md:w-[80%] lg:w-[600px] h-auto max-h-[90vh] overflow-auto bg-white px-6 pb-5 rounded-3xl shadow-lg'>
      <input
        className="block p-2 rounded-b-3xl bg-red-400  mx-auto mb-4 text-white text-center text-2xl"
        style={{ backgroundColor: color}}
        value={title}
        placeholder = "New Note"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="block w-[100%] pt-3 px-4 rounded-3xl bg-red-400 mx-auto text-white sm:text-2xl md:text-lg"
        value={content}
        rows={13}
        style={{ backgroundColor: color}}
        placeholder = "• New content"
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleContentKeyDown}
      />
      <button
        className="action-button"
        onClick={() => saveNote(title, content, done, color)}>
        Save
      </button>
      <button
        className="action-button"
        onClick={() => {
          if(note){
            console.log("smazání poznámky");
            deleteNote(note.id);
          } else {
            console.log("klikla si tlačítko");
            handleClose();
          }}}>
        {note == undefined? "Close Note" : "Delete"}
      </button>
      <button
        className="action-button"
        onClick={() => setDone(true)}>
       {done? "Done" : "Set to Done"}
       </button>
      </div>
   
          {/* <button
            className="px-6 py-1 text-[18px] font-bold uppercase bg-[#0f0e0f] text-green-400 hover:text-gray-950 hover:bg-green-400 transition-all duration-200"
            onClick={handleMarkAsDone}
            disabled = {done}
          >
            {done? "Done" : "Mark as Done"}
          </button> */}
        {/* </Modal></div> */}
      {/* </div> */}
    </Modal>
  );
};

export default Note;
