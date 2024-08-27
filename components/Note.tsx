import React, { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import { NoteProps } from './NoteProps';


const Note = ({ open, handleClose, saveNote, note }: NoteProps) => {
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

  const handleContentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setContent((prevContent) => prevContent + '\n• ');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] lg:h-[70%] max-w-[600px] bg-[#201f20] rounded-lg shadow-xl p-4 flex flex-col items-center ">
        <textarea
          className="w-1/2 h-14 text-[1.25rem] font-bold resize-none text-center mb-4 p-1 box-border rounded-lg bg-[#0f0e0f] text-violet-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="w-full h-[400px] bg-[#0f0e0f] border-gray-950 rounded-lg p-2 flex items-center overflow-y-auto">
          <textarea
            className="w-full h-full border-none outline-none resize-none text-base leading-6 p-4 box-border bg-[#0f0e0f] text-violet-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleContentKeyDown}
          />
        </div>
        <div className="flex mt-4 space-x-4">
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
            className="px-[1.5rem] py-[0.3rem] text-[18px] font-bold uppercase bg-[#0f0e0f] text-green-400 hover:text-gray-950 hover:bg-green-400 transition-all duration-200"
            onClick={handleMarkAsDone}
            disabled = {done}
          >
            {done? "Done" : "Mark as Done"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Note;
