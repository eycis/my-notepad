import React, { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import { model } from './NoteProps';


const Note = ({ open, handleClose, saveNote, note }: model) => {

  const [title, setTitle] = useState<string>(note?.title || 'New Note');
  const [content, setContent] = useState<string>(note?.content || '• New content');
  const [done, setDone] = useState<boolean>(note?.done || false)

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setDone(note.done || false);
    } else {
      setTitle('New Note');
      setContent('• New content');
      setDone(false);
  }
  }, [note]);

  const handleSave = () => {
    saveNote(title, content, done);
    handleClose();
  };

  const handleMarkAsDone = () => {
    setDone(true);
  };

  const handleContentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setContent((prevContent) => prevContent + '\n• ');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50%] max-w-[600px] bg-white p-6 rounded-3xl shadow-lg'>
      <input
          className="block w-[40%] p-2 rounded-3xl bg-red-400  mx-auto mb-4 text-white text-center"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="block w-[100%] pt-3 px-4 rounded-3xl bg-red-400 mx-auto text-white"
          value={content}
          rows={15}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleContentKeyDown}
        />
      </div>
        {/* <div className="flex mt-4 space-x-4">
          <button
            className="px-[1.5rem] py-[0.3rem] text-[18px] font-bold uppercase bg-[#0f0e0f] text-violet-400 hover:text-gray-950 hover:bg-violet-400 transition-all duration-200"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-[1.5rem] py-[0.3rem] text-[18px] font-bold uppercase bg-[#0f0e0f] text-red-400 hover:text-gray-950 hover:bg-red-400 transition-all duration-200"
            onClick={handleClose}
          >
            Close
          </button>
          <button
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
