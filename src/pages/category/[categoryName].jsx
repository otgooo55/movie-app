import { MovieCard } from "@/components/MovieCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCategory } from "@/utils/getCategory";
const Page = () => {
  const router = useRouter();
  const categoryName = router.query?.categoryName;
  const [movieCategory, setMovieCategory] = useState([]);
  useEffect(() => {
    if (!categoryName) return;
    const getMovieCategory = async () => {
      const data = await getCategory(categoryName);
      console.log(data);
      setMovieCategory(data);
    };
    getMovieCategory();
  }, [categoryName]);
  console.log(movieCategory);
  return (
    <div className="container mx-auto max-w-[1280px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movieCategory?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default Page;
