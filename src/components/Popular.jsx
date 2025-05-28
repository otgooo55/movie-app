import { getPopularMovies } from "@/lib/get-popular-movies";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
Link;
export const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setPopularMovies(popularMovies);
      console.log(popularMovies);
    };
    fetchMovies();
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex  justify-between mt-[54px]">
        <h1 className="  flex  text-[24px] font-black">Popular</h1>
        <Link href={`category/popular`}>
          <Button variant="ghost">
            see more
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {popularMovies?.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
