import { Header } from "../components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { TopRated } from "@/components/TopRated";
import { Upcoming } from "@/components/Upcoming";
import { useEffect, useState } from "react";
import { Popular } from "@/components/Popular";
import { Footer } from "@/components/Footer";
import { HomePageLoading } from "@/components/HomePageLoading";
const Home = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const getNowPlayingMovies = async () => {
    setLoading(true);
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
      setLoading(false);
    } catch (catchError) {
      setError(catchError);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  if (loading) return <HomePageLoading />;
  if (error) return <div>error</div>;
  return (
    <div>
      <div className="container mx-auto max-w-[1280px]">
        <MovieCarousel nowPlayingMovie={nowPlayingMovie} />

        <Upcoming />
        <Popular />
        <TopRated />
      </div>
    </div>
  );
};

export default Home;
