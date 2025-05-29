import { useState, useEffect } from "react";
import Link from "next/link";
import { getDirector } from "@/lib/get-director";

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
