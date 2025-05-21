import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { MovieCarouselItem } from "./MovieCarouselItem";

export const MovieCarousel = ({ nowPlayingMovie }) => {
  {
    return (
      <div>
        <Carousel
          className="relative"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {nowPlayingMovie?.slice(0, 3).map((movie, index) => {
              const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie.backdrop_path}`;
              return (
                <CarouselItem key={index}>
                  <div>
                    <MovieCarouselItem
                      imageUrl={imageUrl}
                      title={movie.title}
                      vote_average={movie.vote_average}
                      overview={movie.overview}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
};
