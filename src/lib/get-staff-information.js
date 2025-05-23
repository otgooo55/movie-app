export const getStaffMovies = async (id) => {
  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${id}/similar?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );
 const data = await responce.json();

  const staffMovies = data.crew.find((person) => person.job === "Director");

  return { staffMovies, cast };
};
