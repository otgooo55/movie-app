export const getDirector = async (id) => {
  try {
    const responce = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${id}/credits?language=en-US`,
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
