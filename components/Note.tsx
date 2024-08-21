import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import { NoteProps } from './NoteProps';

const Note = ({ open, handleClose, saveNote, note }: NoteProps) => {
  const [title, setTitle] = useState<string>(note?.title || 'New Note');
  const [content, setContent] = useState<string>(note?.content || '• Add note details');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      // Reset to default values when no note is being edited
      setTitle('New Note');
      setContent('• Add details');
        }
    }, [note]);

  const handleSave = () => {
    saveNote(title, content);
    handleClose();
  };

  const handleContentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setContent((prevContent) => prevContent + '\n• ');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] lg:h-[70%] max-w-[600px] bg-gray-900 border-2 border-gray-900 rounded-lg shadow-xl p-4 flex flex-col items-center ">
        <textarea
          className="w-1/2 h-14 text-xl font-bold resize-none text-center mb-4 p-2 box-border border-2 border-gray-950 rounded-lg bg-gray-950 text-violet-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="w-full h-[300px] bg-gray-950 border-gray-950 rounded-lg p-2 flex items-center overflow-y-auto">
          <textarea
            className="w-full h-full border-none outline-none resize-none text-base leading-6 p-4 box-border bg-gray-950 text-violet-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleContentKeyDown}
          />
        </div>
        <div className="flex mt-4 space-x-4">
          <button
            className="px-[1.5rem] py-[0.3rem] text-[18px] font-bold uppercase bg-[#4a37561d] text-violet-400 hover:text-gray-950 hover:bg-violet-400 transition-all duration-200"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-[1.5rem] py-[0.3rem] text-[18px] font-bold uppercase bg-[#4a37561d] text-red-400 hover:text-gray-950 hover:bg-red-400 transition-all duration-200"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Note;
