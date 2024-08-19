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
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          maxWidth: '90%', 
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Create New Item
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 300, // Výška oblasti pro text
            bgcolor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: 1,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            overflowY: 'auto', // Povolit scrollování, pokud je text delší než výška
          }}
        >
          <textarea
            placeholder="Enter item name"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              outline: 'none',
              resize: 'none', // Zakázat manuální změnu velikosti
              fontSize: '16px',
              lineHeight: '1.5',
              padding: '0',
              boxSizing: 'border-box',
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleClose}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default Note;
