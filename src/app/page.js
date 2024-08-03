'use client';

import { useEffect, useState } from 'react';
import { getStarWarsData } from './services/getStarWars';
import { Box } from '@mui/material';
import SectionAlbum from './components/SectionAlbum';

export default function Home() {
  const [data, setData] = useState({ films: [], people: [], starships: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const storedData = localStorage.getItem('starWarsData');
        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          const result = await getStarWarsData();
          setData(result);
          localStorage.setItem('starWarsData', JSON.stringify(result));
        }
      } catch (error) {
        console.error('Error fetching Star Wars data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box>
      <SectionAlbum data={data} />
    </Box>
  );
}