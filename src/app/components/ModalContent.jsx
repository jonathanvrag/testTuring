import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

function fetchEndpointData(url, setData) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(prevData => ({ ...prevData, [url]: data.name }));
    })
    .catch(error => console.error('Error fetching data:', error));
}

function renderJSON(data, fetchedData) {
  if (typeof data === 'object' && data !== null) {
    const entries = Object.entries(data);
    return (
      <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        {entries.map(([key, value]) => (
          <li key={key} style={{ marginBottom: '5px' }}>
            <strong style={{ color: '#333', fontWeight: 'bold' }}>{key}:</strong> {typeof value === 'object' ? renderJSON(value, fetchedData) : (fetchedData[value] || value.toString())}
          </li>
        ))}
      </ul>
    );
  }
  return <span>{data.toString()}</span>;
}

export default function ModalContent({ index, title, name, data, handleClose }) {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const urls = Object.entries(data)
      .filter(([key, value]) => key !== 'url' && typeof value === 'string' && value.startsWith('http'))
      .map(([key, value]) => value);
    urls.forEach(url => fetchEndpointData(url, setFetchedData));
  }, [data]);

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
        {renderJSON(data, fetchedData)}
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