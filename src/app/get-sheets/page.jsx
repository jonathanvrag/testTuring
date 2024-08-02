'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { getStarWarsData } from '../services/getStarWars';

const configurations = [
  { film: 1, characters: 3, ships: 1 },
  { film: 0, characters: 3, ships: 2 },
];

const generateRandomEnvelope = id => {
  const config =
    configurations[Math.floor(Math.random() * configurations.length)];
  const film = Array(config.film).fill('film');
  const characters = Array(config.characters).fill('character');
  const ships = Array(config.ships).fill('ship');
  const cards = [...film, ...characters, ...ships].sort(
    () => Math.random() - 0.5
  );
  return { id, locked: false, timer: 0, clicked: false, cards };
};

export default function Page() {
  const [envelopes, setEnvelopes] = useState([
    generateRandomEnvelope(1),
    generateRandomEnvelope(2),
    generateRandomEnvelope(3),
    generateRandomEnvelope(4),
  ]);
  const [openedEnvelope, setOpenedEnvelope] = useState(null);
  const [cards, setCards] = useState([]);

  const openEnvelope = async id => {
    setEnvelopes(prevEnvelopes =>
      prevEnvelopes.map(envelope =>
        envelope.id === id
          ? { ...envelope, locked: true, timer: 0, clicked: true }
          : { ...envelope, locked: true, timer: 3 }
      )
    );
    const envelope = envelopes.find(envelope => envelope.id === id);
    setOpenedEnvelope(envelope);

    const data = await getStarWarsData();
    const newCards = envelope.cards.map(cardType => {
      if (cardType === 'film') {
        const randomIndex = Math.floor(Math.random() * data.films.length);
        return { item: data.films[randomIndex], index: randomIndex };
      } else if (cardType === 'character') {
        const randomIndex = Math.floor(Math.random() * data.people.length);
        return { item: data.people[randomIndex], index: randomIndex };
      } else if (cardType === 'ship') {
        const randomIndex = Math.floor(Math.random() * data.starships.length);
        return { item: data.starships[randomIndex], index: randomIndex };
      }
    });
    console.log(newCards);
    console.log(data);
    setCards(newCards);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnvelopes(prevEnvelopes =>
        prevEnvelopes.map(envelope =>
          envelope.locked && envelope.timer > 0
            ? { ...envelope, timer: envelope.timer - 1 }
            : envelope.locked && envelope.timer === 0 && !envelope.clicked
            ? { ...envelope, locked: false }
            : envelope
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
            disabled={envelope.locked || envelope.clicked}
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
                  <Button>
                    {card.item.inAlbum ? 'Descartar' : 'Agregar al álbum'}
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
