export const getCategory = async (categoryName) => {
  try {
    const responce = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${categoryName}?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const category = await responce.json();
    return category?.results;
  } catch (error) {
    console.log(error);
  }
};
