import { Circle } from '@mui/icons-material';
import { Avatar, Card, CardHeader } from '@mui/material';
import React from 'react';

const cardStyles = {
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '10px',
  maxWidth: 345,
  minHeight: 140,
};

const typographyStyles = {
  color: 'black',
  fontFamily: 'PT Sans Narrow, sans-serif',
};

export default function CardAlbum({ index, type }) {
  return (
    <Card sx={cardStyles}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: 'gray',
            }}>
            <Circle />
          </Avatar>
        }
        titleTypographyProps={{ fontSize: '1.2rem' }}
        title={`#${index + 1}`}
        sx={typographyStyles}></CardHeader>
    </Card>
  );
}
