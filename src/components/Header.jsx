import { Film, ChevronDown, Moon } from "lucide-react";
export const Header = () => {
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex  justify-between">
        <div className="flex">
          <Film />
          <div>Movie Z</div>
        </div>
        <div className="flex gap-1.5">
          <ChevronDown />
          <div className="">Genre</div>
          <input placeholder="search" type="text"></input>
        </div>

        <button>
          <Moon />
        </button>
      </div>
    </div>
  );
};
