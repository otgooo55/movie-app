import { parseAsJson, useQueryState } from "nuqs";
import { z } from "zod";

const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const Search = () => {
  const [selectedGenres, setSelectedGenres] = useQueryState(
    "selectedGenres",
    parseAsJson(z.array(genreSchema).parse)
  );

  console.log(selectedGenres);

  return <div>serach</div>;
};

export default Search;
