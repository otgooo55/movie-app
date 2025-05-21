import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
export const Upcoming = () => {
  <div className="max-w-[1280px] m-auto">
    <div className="flex justify-between">
      <h1>Upcoming</h1>
      <Button variant="ghost">
        See more
        <ChevronRight />
      </Button>
    </div>
    <img src="DearSanta.jpg" />
  </div>;
};
