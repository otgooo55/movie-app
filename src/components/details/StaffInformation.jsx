
import { useState } from "react";
import { useEffect } from "react";
import {getStaffInformation} from "@/lib/get-staff-information"
export const StaffInformation = ({movieId}) => {
  const [staffMovies, setStaffMovies] = useState();
  useEffect(() => {
    const fetchInformation = async () =>{
      const {StaffMovies} = await getStaffInformation(movieId);
      setStaffMovies(StaffMovies)
    }
    if(movieId){
      fetchInformation();
    }
  }, [movieId])

  return (
    <div className="flex-col  flex gap-y-[33px]">
      <div className="flex px-[20px] gap-13">
        <p className="text-[16px] font-bold w-[64px]">Director</p>
        <p className="text-[16px]">{staffMovies?.name}</p>
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

