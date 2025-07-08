
export  const getPopularMovie = async ()=>{
    const response = await fetch(`https://api.sampleapis.com/movies/drama`);
    const data = await response.json();
    return data;
}

export const searchMovie = async (query) => {
  try {
    const response = await fetch('https://api.sampleapis.com/movies/drama');
    const data = await response.json();

    const results = data.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return results;
  } catch (error) {
    console.error('Search failed:', error);
    return [];
  }
}