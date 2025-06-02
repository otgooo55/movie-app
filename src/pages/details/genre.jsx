import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { getGenreName } from "@/lib/get-genre";
import { Button } from "@/components/ui/button";
import { parseAsJson, useQueryState } from "nuqs";
import { z } from "zod";

const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const GenreSelect = () => {
  const router = useRouter();

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useQueryState(
    "selectedGenres",
    parseAsJson(z.array(genreSchema).parse),
    { shallow: false }
  );

  useEffect(() => {
    const fetchGenres = async () => {
      const genreZ = await getGenreName();
      setGenres(genreZ.genres);
    };

    fetchGenres();
  }, []);

  const handleSelectGenre = (genre) => {
    if (!genres) return;
    if (!selectedGenres) {
      setSelectedGenres([genre]);
      router.push(`/search?selectedGenres=${selectedGenres}`);
      return;
    }
    const existingGenre = selectedGenres?.find((g) => g.id === genre.id);

    if (existingGenre) {
      const filteredGenre = selectedGenres?.filter((g) => g.id !== genre.id);
      setSelectedGenres(filteredGenre);
    } else {
      setSelectedGenres([...selectedGenres, genre]);

      if (router.pathname !== "/search") {
        router.push("/search");
      }
    }
  };
  return (
    <div>
      <div className="flex gap-3 flex-wrap font-bold pt-5">
        {genres.map((genre) => {
          const isSelected = selectedGenres?.find((g) => g.id === genre.id);

          return (
            <Button
              key={genre.id}
              variant={isSelected ? "primary" : "secondary"}
              className={`border-gray-400 border-[1px] rounded-full px-[10px] py-[2px] flex font-bold ${
                isSelected ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => handleSelectGenre(genre)}
            >
              {genre?.name} <ChevronRight />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
