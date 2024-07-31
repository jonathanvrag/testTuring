import { useEffect } from 'react';
import { getStarWarsData } from '../services/getStarWars';

export default function MyAlbum() {
  useEffect(() => {
    getStarWarsData();
  }, []);

  return (
    <div>MyAlbum</div>
  )
}
