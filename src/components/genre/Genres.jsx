import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { GenreSelect } from "@/pages/details/genre";

export const Genres = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ChevronDown />
            Genres
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-150 p-5">
          <GenreSelect />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
