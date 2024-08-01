async function fetchAllPages(url) {
  let results = [];
  let nextUrl = url;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    results = results.concat(data.results);
    nextUrl = data.next; // La URL de la siguiente página
  }

  return results;
}

export async function getStarWarsData() {
  try {
    const [filmsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SWAPI_FILMS_URL}`),
    ]);

    const filmsData = await filmsResponse.json();

    const [peopleData, starshipsData] = await Promise.all([
      fetchAllPages(`${process.env.NEXT_PUBLIC_SWAPI_PEOPLE_URL}`),
      fetchAllPages(`${process.env.NEXT_PUBLIC_SWAPI_STARSHIPS_URL}`),
    ]);

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