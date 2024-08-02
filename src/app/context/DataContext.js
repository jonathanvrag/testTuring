'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getStarWarsData } from '../services/getStarWars';

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

  const openEnvelope = async id => {
    setEnvelopes(prevEnvelopes =>
      prevEnvelopes.map(envelope =>
        envelope.id === id
          ? { ...envelope, locked: true, timer: 0, clicked: true }
          : { ...envelope, locked: true, timer: 60 }
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

  useEffect(() => {
    if (
      cards.length === 0 &&
      envelopes.every(envelope => envelope.timer === 0)
    ) {
      setIsLocked(false);
    } else {
      setIsLocked(true);
    }
  }, [cards, envelopes]);

  const handleAddToAlbum = card => {
    setResultEnvelope(prev => {
      const exists = prev.some(
        item => item.index === card.index && item.category === getCategory(card)
      );
      if (!exists) {
        setCards(prevCards => prevCards.filter(c => c.index !== card.index));
        return [...prev, { ...card, category: getCategory(card) }];
      }
      return prev;
    });
  };

  const handleDiscardFromAlbum = card => {
    setCards(prevCards => {
      const updatedCards = prevCards.filter(c => c.index !== card.index);
      return updatedCards;
    });
  };

  const getCategory = card => {
    if (card.item.title) {
      return 'films';
    } else if (card.item.birth_year) {
      return 'people';
    } else if (card.item.MGLT) {
      return 'starships';
    }
    return 'unknown';
  };

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
        openEnvelope,
        handleAddToAlbum,
        handleDiscardFromAlbum,
        getCategory,
      }}>
      {children}
    </DataContext.Provider>
  );
};