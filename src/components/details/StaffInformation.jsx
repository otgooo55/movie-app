// import { useState } from "react";
// import { useEffect } from "react";
// import { getStaffMovies } from "@/lib/get-staff-movies";

// export const StaffInformation = ({ id }) => {
//   const [directors, setDirectors] = useState([]);
//   useEffect(() => {
//     if (!id) return;
//     const directorList = data?.crew?.filter(
//       (person) => person.job === "Director"
//     );
//     setDirectors(directorList);
//   }, [id]);
//   getStaffMovies();
// };

// return (
//   <div className="flex-col  flex gap-y-[33px]">
//     <div className="flex px-[20px] gap-13">
//       <p className="text-[16px] font-bold w-[64px]">Director</p>
//       {directors.map((director) => (
//         <p key={director.id} className="text-[16px]">
//           {director.name}
//         </p>
//       ))}
//     </div>
//     <div className="flex px-[20px] gap-13">
//       <p className="text-[16px] font-bold w-[64px]">Writers</p>
//       <p className="text-[16px]">Winnie Holzman · Dana Fox · Gregory Maguire</p>
//     </div>
//     <div className="flex px-[20px] gap-13">
//       <p className="text-[16px] font-bold w-[64px]">Stars</p>
//       <p className="text-[16px]">
//         Cynthia Erivo · Ariana Grande · Jeff Goldblum
//       </p>
//     </div>
//   </div>
// );
import { getStaffMovies } from "@/lib/get-staff-movies";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getDirector } from "@/lib/api/get-director";

export const Director = ({ id }) => {
  const [directors, setDirector] = useState([]);
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    if (!id) return;
    const fetchdDirector = async () => {
      try {
        const data = await getDirector(id);
        console.log("Raw director data:", data);

        const isDirector = data?.crew?.filter(
          (person) => person.job === "Director"
        );

        const isWriter = data?.crew?.filter(
          (person) => person.department === "Writing"
        );

        setDirector(isDirector);
        setWriters(isWriter);
      } catch (error) {
        console.error("Failed to fetch directors:", error);
      }
    };

    fetchdDirector();
  }, [id]);

  return (
    <div className="flex-col flex gap-y-[33px] divide-y">
      {directors.map((person) => (
        <div key={person.id} className="flex px-[20px] gap-13">
          <p className="  font-bold gap-13"> Director</p>

          <p className="text-[16px]  w-[64px] capitalize">{person.name}</p>
        </div>
      ))}

      {writers.map((person) => (
        <div key={person.id} className="flex px-[20px] gap-13">
          <p className="text-[16px] font-bold w-[64px]">Writers</p>
          <p className="text-[16px]">{person?.name}</p>
        </div>
      ))}

      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Stars</p>
        <p className="text-[16px]">
          Cynthia Erivo · Ariana Grande · Jeff Goldblum
        </p>
      </div>
    </div>
  );
};
