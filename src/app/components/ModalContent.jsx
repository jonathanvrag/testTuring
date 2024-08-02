import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function ModalContent({ index, title, name, data, handleClose }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
      <Typography variant='h6' component='h2'>
        {`#${index + 1} - ${title || name}`}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        {JSON.stringify(data, null, 2)}
      </Typography>
      <Button
        onClick={handleClose}
        variant='contained'
        color='primary'
        sx={{ mt: 2 }}>
        Close
      </Button>
    </Box>
  );
}