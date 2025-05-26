import { useState } from "react";
import { useEffect } from "react";
import { getStaffMovies } from "@/lib/get-staff-movies";

export const StaffInformation = ({ id }) => {
//   const [directors, setDirectors] = useState([]);
//   useEffect(() => {
//     if (!id) return;
//     const directorList = data?.crew?.filter(
//       (person) => person.job === "Director"
//     );
//     setDirectors(directorList);
//   }, [id]);
//   getStaffMovies(directors);
// };

return (
  <div className="flex-col  flex gap-y-[33px]">
    <div className="flex px-[20px] gap-13">
      <p className="text-[16px] font-bold w-[64px]">Director</p>
      {directors.map((director) => (
        <p key={director.id} className="text-[16px]">
          {director.name}
        </p>
      ))}
    </div>
    <div className="flex px-[20px] gap-13">
      <p className="text-[16px] font-bold w-[64px]">Writers</p>
      <p className="text-[16px]">Winnie Holzman · Dana Fox · Gregory Maguire</p>
    </div>
    <div className="flex px-[20px] gap-13">
      <p className="text-[16px] font-bold w-[64px]">Stars</p>
      <p className="text-[16px]">
        Cynthia Erivo · Ariana Grande · Jeff Goldblum
      </p>
    </div>
  </div>
);
}
