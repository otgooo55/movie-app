import { Film, ChevronDown, Moon } from "lucide-react";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="max-w-[1280px] m-auto  ">
      <div className="flex justify-between">
        <div className="flex">
          <Link href={`/`}>
            <Film />
            <div>Movie Z</div>
          </Link>
        </div>
        <div className="flex gap-1.5">
          <Link href="details/genre">
            <ChevronDown />
            <div className="">Genre</div>
          </Link>
          <input placeholder="search" type="text"></input>
        </div>

        <button>
          <Moon />
        </button>
      </div>
    </div>
  );
};
