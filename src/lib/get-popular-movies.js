export const getPopularMovies = async () => {
  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );
  const movies = await responce.json();
  return movies?.results;
};
