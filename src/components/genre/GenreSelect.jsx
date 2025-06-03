import { useRouter } from "next/router";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";
import { Button } from "../ui/button";

export const AllGenres = () => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);

  const [genreIds, setGenreIds] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenres(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  const handleSelectGenre = (id) => {
    const newGenreIds = setGenreIds((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );

    router.push(`/genres?genreIds=${newGenreIds}`);
  };

  return (
    <div className="flex flex-col">
      {genres?.genres?.map((genre) => (
        <Button
          className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold dark:bg-black light:bg-white"
          onClick={() => handleSelectGenre(genre.id, genre.name)}
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
};
