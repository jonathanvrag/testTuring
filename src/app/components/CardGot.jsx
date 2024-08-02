import React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader } from '@mui/material';

function isSpecial(index, type) {
  if (type === 'films' && index < 6) return true;
  if (type === 'people' && index < 20) return true;
  if (type === 'starships' && index < 10) return true;
  return false;
}

export default function CardGot({ index, data, type }) {
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
          <Avatar
            sx={{
              bgcolor: special ? 'gold' : 'blue',
            }}>
            {special ? 'S' : 'R'}
          </Avatar>
        }
        title={`#${index + 1} - ${title}${name}`}></CardHeader>
        <CardContent>
          <Button variant='contained' color='primary'>More information</Button>
        </CardContent>
    </Card>
  );
}
