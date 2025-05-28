import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { getTopRatedMovies } from "@/lib/get-top-rated-movies";
import Link from "next/link";
Link;
export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();
      setTopRatedMovies(topRatedMovies);
      console.log(topRatedMovies);
    };
    fetchMovies();
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">Upcoming</h1>
        <Link href={`category/top_rated`}>
          <Button variant="ghost">
            see more
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {topRatedMovies?.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
