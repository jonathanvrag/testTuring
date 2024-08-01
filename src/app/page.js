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
        console.log('Fetching data...');
        const result = await getStarWarsData();
        console.log('Data fetched:', result);
        setData(result);
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