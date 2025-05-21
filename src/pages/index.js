import { Header } from "../components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Upcoming } from "@/components/Upcoming";
import { useEffect, useState } from "react";
const Home = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const getNowPlayingMovies = async () => {
    try {
      const responce = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await responce.json();
      console.log(movies);
      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <Upcoming />
    </div>
  );
};

export default Home;
