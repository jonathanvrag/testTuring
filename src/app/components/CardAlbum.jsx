import { Circle } from '@mui/icons-material';
import { Avatar, Card, CardHeader } from '@mui/material';
import React from 'react';

export default function CardAlbum({ index, type }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: 'gray',
            }}>
            <Circle />
          </Avatar>
        }
        title={`#${index + 1}`}></CardHeader>
    </Card>
  );
}
