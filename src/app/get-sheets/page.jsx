'use client';

import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DataContext } from '../context/DataContext';
import { DeleteForever, LibraryAdd } from '@mui/icons-material';
import Spinner from '../components/Sppiner/Loader';

const typographyStyles = {
  color: 'black',
  fontFamily: 'PT Sans Narrow, sans-serif',
};

const buttonStyles = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  minWidth: '0',
  color: '#fff',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
};

export default function Page() {
  const {
    envelopes,
    cards,
    resultEnvelope,
    isLocked,
    openEnvelope,
    handleAddToAlbum,
    handleDiscardFromAlbum,
    getCategory,
    isLoading,
  } = useContext(DataContext);

  const getSpecialCard = card => {
    if (card.item.title && card.index < 6) {
      return 'S - Especial';
    } else if (card.item.title) {
      return 'R - Regular';
    } else if (card.item.birth_year && card.index < 20) {
      return 'S - Especial';
    } else if (card.item.birth_year) {
      return 'R - Regular';
    } else if (card.item.MGLT && card.index < 10) {
      return 'S - Especial';
    } else if (card.item.MGLT) {
      return 'R - Regular';
    }
    return 'unknown';
  };

  const isInAlbum = card => {
    return resultEnvelope.some(
      item => item.index === card.index && item.category === getCategory(card)
    );
  };

  return (
    <Box>
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          padding: '1vh 1vw',
          color: '#ffb01f',
          fontFamily: 'PT Sans Narrow, sans-serif',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
        }}>
        Obtener laminas
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4vw',
            padding: '20px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: '10px',
          }}>
          {envelopes.map(envelope => (
            <Box key={envelope.id}>
              <Button
                onClick={() => openEnvelope(envelope.id)}
                disabled={envelope.locked || envelope.clicked || isLocked}
                sx={{
                  width: '150px',
                  height: '200px',
                  backgroundImage: envelope.clicked
                    ? 'linear-gradient(40deg, hsl(39deg 100% 56%) 0%, hsl(39deg 100% 50%) 14%, hsl(39deg 100% 44%) 21%, hsl(39deg 100% 37%) 26%, hsl(39deg 100% 31%) 30%, hsl(39deg 100% 25%) 35%, hsl(39deg 100% 19%) 39%, hsl(38deg 100% 13%) 43%, hsl(39deg 100% 6%) 46%, hsl(0deg 0% 0%) 50%, hsl(330deg 17% 2%) 54%, hsl(345deg 17% 5%) 57%, hsl(340deg 17% 7%) 61%, hsl(345deg 17% 9%) 65%, hsl(348deg 16% 12%) 69%, hsl(350deg 16% 15%) 74%, hsl(347deg 16% 17%) 79%, hsl(349deg 16% 19%) 86%, hsl(347deg 16% 22%) 100%'
                    : 'linear-gradient(40deg, hsl(39deg 100% 56%) 0%, hsl(36deg 93% 52%) 5%, hsl(33deg 85% 47%) 10%, hsl(30deg 77% 43%) 15%, hsl(27deg 70% 39%) 21%, hsl(24deg 63% 35%) 27%, hsl(21deg 55% 31%) 33%, hsl(18deg 48% 26%) 39%, hsl(15deg 40% 22%) 46%, hsl(10deg 36% 22%) 53%, hsl(8deg 34% 22%) 59%, hsl(4deg 30% 22%) 66%, hsl(0deg 28% 22%) 73%, hsl(358deg 25% 22%) 80%, hsl(353deg 23% 22%) 87%, hsl(351deg 19% 22%) 94%, hsl(347deg 16% 22%) 100%)',
                  border: '2px solid gray',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: envelope.clicked ? '#fff' : '#fff',
                  cursor:
                    envelope.locked || envelope.clicked
                      ? 'not-allowed'
                      : 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover:not(:disabled)': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                  },
                }}>
                {envelope.clicked
                  ? 'Abierto'
                  : envelope.locked
                  ? `Esperando (${envelope.timer}s)`
                  : 'Hacer clic'}
              </Button>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: '10px',
            padding: '2vh 5vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
            <Typography
              variant='h3'
              sx={{
                ...typographyStyles,
                fontWeight: 700,
                color: '#ffb01f',
                padding: '20px',
              }}>
              Laminas
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 4,
            }}>
            {isLoading && (
              <Box
                sx={{
                  width: '88vw',
                  height: '10vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Spinner />
              </Box>
            )}
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  padding: '5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginBottom: '5px',
                  padding: '20px',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                {card ? (
                  <Box>
                    <Box>
                      <Typography
                        variant='h4'
                        sx={{ ...typographyStyles, fontWeight: 700 }}>
                        {card.item.title || card.item.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1vw' }}>
                      <Typography
                        variant='h5'
                        sx={{ ...typographyStyles, fontWeight: 700 }}>
                        Sección:
                      </Typography>
                      <Typography variant='h6' sx={typographyStyles}>
                        {card.item.title
                          ? ' Película'
                          : card.item.birth_year
                          ? ' Personaje'
                          : card.item.MGLT
                          ? ' Naveegular'
                          : 'unknown'}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1vw' }}>
                      <Typography
                        variant='h5'
                        sx={{ ...typographyStyles, fontWeight: 700 }}>
                        Número:
                      </Typography>
                      <Typography variant='h6' sx={typographyStyles}>
                        {card.index + 1}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1vw' }}>
                      <Typography
                        variant='h5'
                        sx={{ ...typographyStyles, fontWeight: 700 }}>
                        Categoría:
                      </Typography>
                      <Typography variant='h5' sx={typographyStyles}>
                        {getSpecialCard(card)}
                      </Typography>
                    </Box>
                    <Button
                      variant='contained'
                      sx={{
                        ...buttonStyles,
                        color: isInAlbum(card) ? 'error.main' : 'success.main',
                      }}
                      onClick={() => {
                        isInAlbum(card)
                          ? handleDiscardFromAlbum(card)
                          : handleAddToAlbum(card);
                      }}>
                      {isInAlbum(card) ? <DeleteForever /> : <LibraryAdd />}
                    </Button>
                  </Box>
                ) : (
                  <div>Card data is not available</div>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
