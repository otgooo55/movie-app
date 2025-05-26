import { Star } from "lucide-react";
import { MovieTrailer } from "../MovieTrailer";

export const Cover = ({ movie }) => {
  console.log(movie);
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.backdrop_path}`;
  console.log(imgUrl);
  const poster = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`;
  return (
    <div>
      <div className="flex m-auto justify-between max-w-[1280px]">
        <div>
          <p>{movie.title}</p>
          <p>
            {movie.release_date} {movie.runtime}min
          </p>
        </div>
        <div>
          <p>Rating</p>
          <div className="flex">
            <Star className="text-yellow-300 fill-amber-300" />
            <div className="flex flex-col">
              <p>6,9/10 </p>
              <p>37k</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 max-w-[1280px] m-auto">
        <img src={poster} className="w-[290px] h-[428px] " />
        <img src={imgUrl} className="w-[760px] h-[428px]" />
        <MovieTrailer/>
      </div>
    </div>
  );
};
