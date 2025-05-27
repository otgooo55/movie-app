import { Copyright } from "lucide-react";
import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
export const Footer = () => {
  return (
    <div className="h-[280px]  bg-[#4338CA] mt-[51px] flex w-screen">
      <div className="flex flex-col text-white py-[40px] px-[80px]">
        <div className="flex items-center">
          {" "}
          <Film className="size-[16px]" />
          <div className="text-[16px]">Movie Z</div>
        </div>
        <div className="flex items-center py-[12px] ">
          <Copyright className="size-[14px]" />
          <div className="text-[14px]">Movie Z. All Rights Reserved.</div>
        </div>
      </div>
      <div className="pl-[816px] ">
        <div className="pt-[40px] text-white">Contain Information</div>
        <div className="flex items-center gap-2 pt-[12px] text-white">
          <Mail />
          <div>
            <div>Email:</div>
            <a>support@movieZ.com</a>
          </div>
        </div>
        <div className="flex items-center py-[24px] gap-2 text-white">
          <Phone />
          <div>
            <div>Phone:</div>
            <a>+976 (11) 123-4567</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] pt-[40px] pl-[96px] text-white">
        <div>Follow us</div>
        <a>Facebook Instagram Twitter Youtube</a>
      </div>
    </div>
  );
};
