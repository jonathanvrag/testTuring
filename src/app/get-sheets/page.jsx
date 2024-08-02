'use client';

import React, { useState, useEffect, useContext } from 'react';
import { Box, Button } from '@mui/material';
import { getStarWarsData } from '../services/getStarWars';
import { DataContext } from '../context/DataContext';

export default function Page() {
  const {
    envelopes,
    openedEnvelope,
    cards,
    resultEnvelope,
    isLocked,
    openEnvelope,
    handleAddToAlbum,
    handleDiscardFromAlbum,
    getCategory,
  } = useContext(DataContext);

  const getSpecialCard = card => {
    if (card.item.title && card.index < 6) {
      return 'S';
    } else if (card.item.title) {
      return 'R';
    } else if (card.item.birth_year && card.index < 20) {
      return 'S';
    } else if (card.item.birth_year) {
      return 'R';
    } else if (card.item.MGLT && card.index < 10) {
      return 'S';
    } else if (card.item.MGLT) {
      return 'R';
    }
    return 'unknown';
  };

  const isInAlbum = card => {
    return resultEnvelope.some(
      item => item.index === card.index && item.category === getCategory(card)
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
      }}>
      {envelopes.map(envelope => (
        <Box key={envelope.id}>
          <Button
            onClick={() => openEnvelope(envelope.id)}
            disabled={envelope.locked || envelope.clicked || isLocked}
            sx={{
              width: '150px',
              height: '200px',
              backgroundColor: envelope.clicked ? '#e0e0e0' : '#f5f5f5',
              border: '2px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              color: envelope.clicked ? '#999' : '#333',
              cursor:
                envelope.locked || envelope.clicked ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover:not(:disabled)': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              },
            }}>
            {envelope.clicked
              ? 'Clicked'
              : envelope.locked
              ? `Locked (${envelope.timer}s)`
              : 'Open'}
          </Button>
        </Box>
      ))}
      {openedEnvelope && (
        <Box sx={{ marginTop: '20px', width: '100%' }}>
          <Box sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
            Opened Envelope:
          </Box>
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginBottom: '5px',
              }}>
              {card ? (
                <>
                  <div>{card.item.title || card.item.name}</div>
                  <div>
                    Categoría:
                    {card.item.title
                      ? ' films'
                      : card.item.birth_year
                      ? ' people'
                      : card.item.MGLT
                      ? ' starships'
                      : 'unknown'}
                  </div>
                  <div>Número: {card.index + 1}</div>
                  <div>{getSpecialCard(card)}</div>
                  <Button
                    onClick={() => {
                      isInAlbum(card)
                        ? handleDiscardFromAlbum(card)
                        : handleAddToAlbum(card);
                    }}>
                    {isInAlbum(card) ? 'Descartar' : 'Agregar al álbum'}
                  </Button>
                </>
              ) : (
                <div>Card data is not available</div>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
