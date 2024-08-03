import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Modal,
} from '@mui/material';
import ModalContent from './ModalContent';
import { OpenInNew } from '@mui/icons-material';

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
  color: 'white',
  fontFamily: 'PT Sans Narrow, sans-serif',
};

const buttonStyles = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  minWidth: '0',
  backgroundColor: 'rgba(225, 119, 17, 0.7)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(225, 119, 17, 1)',}
};

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
      <Card sx={cardStyles}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                ...typographyStyles,
                bgcolor: special ? 'gold' : 'purple',
                fontSize: '1.5rem',
              }}>
              {special ? 'S' : 'R'}
            </Avatar>
          }
          titleTypographyProps={{ fontSize: '1.2rem' }}
          title={`#${index + 1} - ${title}${name}`}></CardHeader>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <Button variant='text' sx={buttonStyles} onClick={handleOpen}>
            <OpenInNew />
          </Button>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <ModalContent
          index={index}
          title={title}
          name={name}
          data={data}
          handleClose={handleClose}
        />
      </Modal>
    </>
  );
}
