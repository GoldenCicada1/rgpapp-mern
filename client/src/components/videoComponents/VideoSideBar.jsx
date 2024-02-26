import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";

export default function VideoSideBar() {
  return (
    <div className="flex text-white right-0 flex-col items-end font-semibold ">
      <div className="mt-16 mr-2 ">
        <div className="mb-2 flex flex-col items-end  ">
          <span className=" text-xs ">
            <SquareFootIcon />m<sup>2</sup>
          </span>
          <span className=" text-xs">5,000</span>
        </div>
        <div className="mb-2 flex flex-col items-end">
          <HotelIcon />
          <span className="ml-4 text-xl">
          2
          <sup className="text-xs">
            Bed
          </sup>
          </span>
        </div>
        <div className="mb-5 flex flex-col items-end">
          <BathtubIcon />
          <span className="ml-4 text-xl">3
          <sup className="text-xs">Bath
          </sup>
          </span>
        </div>
      </div>
      <div className="mt-16 mr-2">
        <div className="flex">
          <FavoriteIcon sx={{ fontSize: 35}} />
        </div>
        <div className="flex flex-col items-end mt-4">
          <ShareIcon sx={{ fontSize: 35}}/>
        </div>
        <div className="flex flex-col items-end mt-4">
          <CompareArrowsIcon sx={{ fontSize: 35}}/>
        </div>
      </div>
    </div>
  );
}
