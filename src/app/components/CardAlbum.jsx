import { Avatar, Card, CardHeader } from '@mui/material';
import React from 'react';

export default function CardAlbum({ index, data }) {
  const title = data.title ? data.title : '';
  const name = data.name ? data.name : '';

  return (
    <Card
      sx={{
        maxWidth: 345,
      }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'purple' }}>E</Avatar>}
        title={`#${index + 1} - ${title}${name}`}></CardHeader>
    </Card>
  );
}
