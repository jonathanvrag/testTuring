export async function getStarWarsData() {
  try {
    const [filmsResponse, peopleResponse, starshipsResponse] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SWAPI_FILMS_URL}`),
        fetch(`${process.env.NEXT_PUBLIC_SWAPI_PEOPLE_URL}`),
        fetch(`${process.env.NEXT_PUBLIC_SWAPI_STARSHIPS_URL}`),
      ]);

    const [filmsData, peopleData, starshipsData] = await Promise.all([
      filmsResponse.json(),
      peopleResponse.json(),
      starshipsResponse.json(),
    ]);

    console.log('Films:', filmsData);
    console.log('People:', peopleData);
    console.log('Starships:', starshipsData);

    return {
      films: filmsData,
      people: peopleData,
      starships: starshipsData,
    };
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
