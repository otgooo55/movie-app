import { AllGenres } from "@/components/AllGenres";
import { MovieCard } from "@/components/MovieCard";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const [genreMovies, setGenreMovie] = useState({});
  const router = useRouter();
  const genreIds = router.query.genreIds;

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreIds}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenreMovie(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, [genreIds]);

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-[30px] pt-[52px] font-bold">Search filter</h1>

      <div className="flex">
        <div className="flex mt-8">
          <div className="w-[387px]">
            <h2 className="text-[24px] font-bold">Genre</h2>
            <h3 className="pb-[20px] tex-[16px]">
              See lists of movies by genre
            </h3>
            <AllGenres />
          </div>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="w-[869px] grid grid-cols-4 gap-8">
          {genreMovies?.results?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
