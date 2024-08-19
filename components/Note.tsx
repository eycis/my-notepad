import React from 'react';
import { Modal } from '@mui/material';

interface CreateItemModalProps {
  open: boolean;
  handleClose: () => void;
}

const Note: React.FC<CreateItemModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[600px] bg-gray-900 border-2 border-gray-900 rounded-lg shadow-xl p-6 flex flex-col items-center">
        <textarea
          className="w-1/2 h-12 text-xl font-bold resize-none text-center mb-4 p-2 box-border border-2 border-gray-950 rounded-lg bg-gray-950 text-violet-400"
        >
          Create New Item
        </textarea>
        <div className="w-full h-[300px] bg-gray-950 border-gray-950 rounded-lg p-2 flex items-center overflow-y-auto">
          <textarea
            className="w-full h-full border-none outline-none resize-none text-base leading-6 p-4 box-border bg-gray-950 text-violet-400">
                Enter details
            </textarea>
        </div>
        <div className="flex mt-4 space-x-4">
          <button
            className="px-[1.5rem] py-[0.3rem] text-[18px] font-bold uppercase bg-[#4a37561d] text-violet-400 hover:text-gray-950 hover:bg-violet-400 transition-all duration-200"
            onClick={handleClose}
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
