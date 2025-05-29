import { getMoviebyId } from "@/utils/getMovieById";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Cover } from "@/components/details/Cover";
import { Header } from "@/components/Header";

import { MovieTrailer } from "@/components/MovieTrailer";
import { Footer } from "@/components/Footer";
import { Director } from "@/components/details/Director";
export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMoviebyId(movieId);
      setMovie(data);
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      <div className="mb-[63.5px] mt-[10px]">
        <Header />
      </div>
      <Cover movie={movie} />
      {/* <StaffInformation movie={movie.id} /> */}
      {/* <MovieTrailer movieId={movieId} /> */}
      <Director movie={movie.id} />
      <Footer />
    </div>
  );
}
