import React, { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, Modal } from '@mui/material';
import ModalContent from './ModalContent';

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
          <Button variant='contained' color='primary' onClick={handleOpen}>More information</Button>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <ModalContent index={index} title={title} name={name} data={data} handleClose={handleClose} />
      </Modal>
    </>
  );
}