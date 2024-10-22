import React, { useEffect, useState } from 'react';
import {Modal } from '@mui/material';
import { NoteType } from './NoteProps';
import { HiOutlineCheckCircle, HiOutlineSave, HiOutlineX } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi2';


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
      setColor('#2F4F4F');
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
       w-full sm:w-[90%] md:w-[80%] lg:w-[600px] h-auto max-h-[90vh] overflow-auto bg-[#FFE8D6] px-6 pb-5 rounded-3xl shadow-lg'>
      <input
        className="block p-2 rounded-b-3xl bg-red-400  mx-auto mb-4 text-white text-center text-2xl"
        style={{ backgroundColor: color}}
        value={title}
        placeholder = "New Note"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="block w-[100%] pt-3 px-4 rounded-3xl mx-auto text-white sm:text-2xl md:text-lg"
        value={content}
        rows={13}
        style={{ backgroundColor: color}}
        placeholder = "• New content"
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleContentKeyDown}
      />
      <div className="flex flex-row justify-around mt-6 space-x-2  sm:space-y-0 sm:space-x-2 sm:flex-row">
      <button
        className="action-button flex items-center justify-center space-x-2 "
        onClick={() => saveNote(title, content, done, color)}>
        <HiOutlineSave className="w-7 h-7"/>
      </button>
      <button
        className="action-button flex items-center justify-center space-x-2"
        onClick={() => {
          if(note){
            deleteNote(note.id);
          } else {
            handleClose();
          }}}>
        {note == undefined? <HiOutlineX className="w-7 h-7" /> : <HiOutlineTrash className="w-7 h-7" /> }
      </button>
      {note&& 
      <button
        className="action-button flex items-center justify-center space-x-2"
        onClick={() => setDone(true)}>
       {done? "Done" : <HiOutlineCheckCircle className="w-7 h-7" /> }
       </button>
      }
      </div>
      </div>
    </Modal>
  );
};

export default Note;
