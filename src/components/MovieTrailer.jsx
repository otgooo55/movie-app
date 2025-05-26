import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { getMovieTrailer } from "@/lib/getMovieTrailer";
import YouTube from "react-youtube";

export const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        setTrailer(data.results);
      } catch (error) {
        console.log("Failed  to fetch movie trailer:", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const movieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[145px] h-[40px] px-[8px] text-[#fff] bg-[#18181B] flex items-center gap-[8px] rounded-md">
          <Play className="w-[16px] h-[16px] " />
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit bg-transparent border-none">
        <YouTube
          videoId={movieTrailer?.key}
          opts={{
            height: "561",
            width: "997",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
