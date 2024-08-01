'use client';

import { useEffect } from 'react';
import { getStarWarsData } from './services/getStarWars';

export default function Home() {
  useEffect(() => {
    getStarWarsData();
  }, []);

  return (
    <div>MyAlbum</div>
  );
}
