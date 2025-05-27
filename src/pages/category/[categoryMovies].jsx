import { MovieCard } from "@/components/MovieCard";
import { getCategory } from "@/utils/getCategory";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { movieCategory } = router.query;

  useEffect(() => {
    const fetchCategory = async () => {
      if (!movieCategory) return;
      const data = await getCategory(movieCategory, currentPage);
      setCategories(data?.results);

      console.log(data);
    };

    fetchCategory();
  }, [movieCategory, currentPage]);

  console.log(currentPage);

  return (
    <div>
      <div className="w-full flex justify-center px-4 mt-12">
        <div className="max-w-7xl w-full flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">
              {(movieCategory === "upcoming" && "Upcoming") ||
                (movieCategory === "popular" && "Popular") ||
                (movieCategory === "top_rated" && "Top rated")}
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
              />
            ))}
          </div>
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                    }}
                  />
                </PaginationItem>

                {[1, 2, 3].map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      <Button variant={pageNumber === currentPage}>
                        {pageNumber}
                      </Button>
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
