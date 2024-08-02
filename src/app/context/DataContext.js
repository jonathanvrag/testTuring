'use client';

import { createContext, useContext, useState } from 'react';

export const DataContext = createContext();

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

export const DataProvider = ({ children }) => {
  const [envelopes, setEnvelopes] = useState([
    generateRandomEnvelope(1),
    generateRandomEnvelope(2),
    generateRandomEnvelope(3),
    generateRandomEnvelope(4),
  ]);
  const [openedEnvelope, setOpenedEnvelope] = useState(null);
  const [cards, setCards] = useState([]);
  const [resultEnvelope, setResultEnvelope] = useState([]);
  const [isLocked, setIsLocked] = useState(true);

  return (
    <DataContext.Provider
      value={{
        envelopes,
        setEnvelopes,
        openedEnvelope,
        setOpenedEnvelope,
        cards,
        setCards,
        resultEnvelope,
        setResultEnvelope,
        isLocked,
        setIsLocked,
      }}>
      {children}
    </DataContext.Provider>
  );
};

