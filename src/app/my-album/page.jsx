'use client';

import React, {useEffect} from 'react'
import {getStarWarsData} from '../services/getStarWars';

export default function Page() {
  useEffect(() => {
    getStarWarsData();
  }, []);

  return (
    <div>MyAlbum</div>
  )
}
