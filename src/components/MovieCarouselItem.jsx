import { Star, Play } from "lucide-react";
export const MovieCarouselItem = (movie) => {
  return (
    <div className="relative">
      <img
        className="w-screen min-h-[246px]  md:max-h-[600px]"
        src={movie.backdrop_path}
      />
      <div className="flex  flex-col md:absolute gap-[16px] m-[20px] top-[178px] left-[120px] md:text-[white] md:w-[404px]">
        <div className="flex w-[335px] h-[52px] justify-between items-center">
          <div>
            <p className="text-[14px]">Now Playing:</p>
            <p className="text-[24px] font-normal">{movie.title}</p>
          </div>
          <div className="flex gap-[4px] p-[8px]">
            <Star className="text-yellow-300 fill-amber-300" />
            <p className="text-[18px] md:text-[14px] ">{movie.vote_average}</p>
          </div>
        </div>

        <div className="flex w-[350px]">
          <p className="text-[14px]">{movie.overview}</p>
        </div>

        <button className="w-[145px] h-[40px] px-[8px] text-[#fff] bg-[#18181B] flex items-center gap-[8px] rounded-md">
          <Play className="w-[16px] h-[16px] " />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
