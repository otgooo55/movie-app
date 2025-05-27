export const getMovieTrailer = async (category, page = 1) => {
  try {
    const responce = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${category}/videos?language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
