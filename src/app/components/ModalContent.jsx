import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

function fetchEndpointData(url, setData) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(prevData => ({ ...prevData, [url]: data.name || data.title }));
    })
    .catch(error => console.error('Error fetching data:', error));
}

function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderJSON(data, fetchedData) {
  if (typeof data === 'object' && data !== null) {
    const entries = Object.entries(data);
    return (
      <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        {entries.map(([key, value]) => {
          const isNumericKey = !isNaN(key);
          const displayKey = isNumericKey
            ? '-'
            : key
                .replace(/_/g, ' ')
                .split(' ')
                .map(capitalizeFirstLetter)
                .join(' ');

          const displayValue =
            key === 'created' || key === 'edited'
              ? formatDate(value)
              : fetchedData[value] || value.toString();

          return (
            <li key={key} style={{ marginBottom: '5px' }}>
              <strong style={{ color: '#333', fontWeight: 'bold' }}>
                {displayKey}
                {isNumericKey ? '' : ':'}
              </strong>{' '}
              {typeof value === 'object'
                ? renderJSON(value, fetchedData)
                : displayValue}
            </li>
          );
        })}
      </ul>
    );
  }
  return <span>{data.toString()}</span>;
}

export default function ModalContent({
  index,
  title,
  name,
  data,
  handleClose,
}) {
  const [fetchedData, setFetchedData] = useState({});
  console.log('data: ', data);

  useEffect(() => {
    const urls = Object.entries(data)
      .filter(
        ([key, value]) =>
          key !== 'url' && typeof value === 'string' && value.startsWith('http')
      )
      .map(([key, value]) => value);

    if (Array.isArray(data.films)) {
      urls.push(...data.films);
    }
    if (Array.isArray(data.characters)) {
      urls.push(...data.characters);
    }
    if (Array.isArray(data.planets)) {
      urls.push(...data.planets);
    }
    if (Array.isArray(data.species)) {
      urls.push(...data.species);
    }
    if (Array.isArray(data.starships)) {
      urls.push(...data.starships);
    }
    if (Array.isArray(data.vehicles)) {
      urls.push(...data.vehicles);
    }
    if (Array.isArray(data.pilots)) {
      urls.push(...data.pilots);
    }

    urls.forEach(url => fetchEndpointData(url, setFetchedData));
  }, [data]);

  return (
    <Box
      sx={{
        height: '80vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflowY: 'auto',
      }}>
      <Typography variant='h6' component='h2'>
        {`#${index + 1} - ${title || name}`}
      </Typography>
      <Typography sx={{ mt: 2 }}>{renderJSON(data, fetchedData)}</Typography>
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
