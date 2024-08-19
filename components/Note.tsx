import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

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
            placeholder="Enter item details"
            className="w-full h-full border-none outline-none resize-none text-base leading-6 p-0 box-border bg-gray-950 text-violet-400">
                Enter details
            </textarea>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="mt-100"
          onClick={handleClose}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="mt-4"
          onClick={handleClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default Note;
