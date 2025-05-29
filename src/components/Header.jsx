import { Film, ChevronDown, Moon, Search, Input } from "lucide-react";

import Link from "next/link";
import { HeaderGenre } from "./HeaderGenre";
export const Header = () => {
  return (
    <div className="max-w-[1280px] mx-auto  ">
      <div className="flex justify-between">
        <div className="flex">
          <Link href={`/`}>
            <Film />
            <div>Movie Z</div>
          </Link>
        </div>
        <div className="flex gap-3 my-3">
          <HeaderGenre />
          <div className="flex align-bottom ">
            <div className="relative text-muted-foreground w-[369px]">
              {/* <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-[38px] border-none shadow-none" */}
              {/* /> */}
            </div>
          </div>
        </div>

        <button>
          <Moon />
        </button>
      </div>
    </div>
  );
};
