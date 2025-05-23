import { getStaffMovies } from "@/lib/get-staff-movies";
import { useState } from "react";
import { useEffect } from "react";
export const StaffInformation = () => {
  const [staffMovies, setStaffMovies] = useState({});
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const movie = await getStaffMovies();
  //     setStaffMovies(movie);
  //     console.log(staffMovies);
  //   };
  //   fetchMovies();
  // }, []);
  useEffect(() => {
    if (!id) return;
    const getStaffMovies = async () => {
      const data = await getStaffMovies(id);
      setStaffMovies(data);
    };
    get();
  }, [id]);

  return (
    <div className="flex-col  flex gap-y-[33px]">
      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Director</p>
        <p className="text-[16px]">{staffMovies?.director}</p>
      </div>
      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Writers</p>
        <p className="text-[16px]">
          Winnie Holzman · Dana Fox · Gregory Maguire
        </p>
      </div>
      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Stars</p>
        <p className="text-[16px]">
          Cynthia Erivo · Ariana Grande · Jeff Goldblum
        </p>
      </div>
    </div>
  );
};
