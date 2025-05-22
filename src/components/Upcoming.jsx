import { ArrowBigRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { getUpcomingMovies } from "@/lib/get-upcoming-movies";
export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();
      setUpcomingMovies(upcomingMovies);
    };
    fetchMovies();
  }, []);
  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
      <div className="flex justify-between">
        <h1>Upcoming</h1>
        <ArrowBigRight />
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {upcomingMovies?.map((movie) => {
          <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
