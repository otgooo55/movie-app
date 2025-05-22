import { Star } from "lucide-react";
export const MovieCard = ({ movie }) => {
  return (
    <div className="w-full rounded-[8px] b-[#F4F4F5]">
      <img src={`https://image.tmdb.org/t/p/original/${movie?.poster.path}`} />
      <div className=" p-[8px] rounded-lg">
        <div className="flex gap-[4px] p-[8px] items-center">
          <Star className=" text-yellow-300 fill-amber-300 w-[16px] h-[16px]" />
          <p className="font-medium text-[#09090B]">
            {movie.vote_average.toFixed(1)}/10
          </p>
        </div>
        <p className="font-medium text-[]14px md:text-[18px] text-[#71717A] pl-[8px]">
          {movie.title}
        </p>
      </div>
    </div>
  );
};
