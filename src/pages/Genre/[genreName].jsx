import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const [movieGenre, setMovieGenre] = useState([]);
  useEffect(() => {
    if (!genreId) return;
    const getMovieGenre = async () => {
      const data = await getGenre(genreId);
      setMovieGenre(data);
    };
    getMovieGenre();
  }, [genreId]);
  return <div></div>;
};
export default Page;
