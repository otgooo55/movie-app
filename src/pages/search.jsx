import { AllGenres } from "@/components/genre/GenreSelect";
import { parseAsJson, useQueryState } from "nuqs";

import { z } from "zod";
import { GenreSelect } from "./details/genre";
import { MovieCard } from "@/components/MovieCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const genreSchema = z
  .object({
    id: z.number(),
    name: z.string(),
  })
  .optional();

const Search = () => {
  const [selectedGenres, setSelectedGenres] = useQueryState(
    "selectedGenres",
    parseAsJson(z.array(genreSchema).parse)
  );
  const router = useRouter();
  const genreId = router.query.genreIds;
  const [filterMovie, setFilterMovie] = useState({});

  useEffect(() => {
    if (!genreId) return;
    const getFilter = async () => {
      const data = await getGenreFilter(genreId);
      console.log("genre", data);

      setFilterMovie(data);
    };
    getFilter();
  }, [genreId]);

  if (!filterMovie || !filterMovie.results) return null;
  const resultMovie = filterMovie.results;
  console.log("kino", resultMovie);

  return (
    <div className="grid-cols-4">
      <GenreSelect />
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {resultMovie?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
