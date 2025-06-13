import { parseAsInteger, parseAsJson, useQueryState } from "nuqs";

import { z } from "zod";
import { GenreSelect } from "./details/genre";
import { MovieCard } from "@/components/MovieCard";
import { useEffect, useState } from "react";
import { getGenreFilter } from "@/lib/get-filter";
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

  const [filterMovie, setFilterMovie] = useState(null);
  // const stringArray = Json.parse(selectedGenres);
  // console.log(stringArray);
  useEffect(() => {
    if (!genreId) return;
    const getFilter = async () => {
      const data = await getGenreFilter(genreId, page);
      setFilterMovie(data);
    };
    getFilter();
    const stringArray = Json.parse(selectedGenres);
    console.log(stringArray);
  }, [genreId]);
  console.log(router.query.selectedGenres);

  return (
    <div className="w-full lg:max-w-[1278px] mx-auto flex flex-col gap-y-[32px]">
      <p className="font-semibold text-[30px] pl-20">Search Filter</p>
      <div className="flex mt-8 ">
        <div className=" flex flex-wrap w-[387px] ">
          <GenreSelect />
        </div>

        <div className="p-5">
          <p> Title </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {filterMovie?.results?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
