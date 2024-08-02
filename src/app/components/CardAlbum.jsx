import { Avatar, Card, CardHeader } from '@mui/material';
import React from 'react';

function isSpecial(index, type) {
  if (type === 'films' && index < 6) return true;
  if (type === 'people' && index < 20) return true;
  if (type === 'starships' && index < 10) return true;
  return false;
}

export default function CardAlbum({ index, data, type }) {
  const title = data.title ? data.title : '';
  const name = data.name ? data.name : '';
  const special = isSpecial(index, type);

  return (
    <Card
      sx={{
        maxWidth: 345,
      }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: special ? 'gold' : 'blue' }}>
            {special ? 'S' : 'R'}
          </Avatar>
        }
        title={`#${index + 1} - ${title}${name}`}></CardHeader>
    </Card>
  );
}
