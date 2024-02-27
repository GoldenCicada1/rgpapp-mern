import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";

export default function VideoSideBar() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex text-white right-0 flex-col items-end font-semibold ">
      <div className="mt-16 mr-2 ">
        <div className="mb-2 flex flex-col items-end 
        hover:text-blue-700
        transition duration-300 ease-in-out
        transform cursor-pointer">
          <span className=" text-xs 
          hover:text-xl
          ">
            <SquareFootIcon sx={{
                fontSize: 20,
                transition: "font-size 0.3s",
                "&:hover": { fontSize: 38 }
              }} />m<sup>2</sup>
          </span>
          <span className=" text-xs">5,000</span>
        </div>
        <div className="mb-2 flex flex-col items-end
        hover:text-blue-700
        transition duration-300 ease-in-out
        transform cursor-pointer">
          <HotelIcon sx={{
                fontSize: 20,
                transition: "font-size 0.3s",
                "&:hover": { fontSize: 38 }
              }}/>
          <span className="ml-4 text-xl
          hover:text-xl
          ">
            2<sup className="text-xs">Bed</sup>
          </span>
        </div>
        <div className="mb-5 flex flex-col items-end
        hover:text-blue-700
        transition duration-300 ease-in-out
        transform cursor-pointer ">
          <BathtubIcon sx={{
                fontSize: 20,
                transition: "font-size 0.3s",
                "&:hover": { fontSize: 38 }
              }} />
          <span className="ml-4 text-xl hover:text-xl">
            3<sup className="text-xs">Bath</sup>
          </span>
        </div>
      </div>
      <div className="mt-16 mr-3">
        <div
          className="
        hover:text-blue-700
        transition duration-300 ease-in-out
        transform cursor-pointer"
          onClick={handleClick}
        >
          {liked ? (
            <FavoriteIcon
              sx={{
                fontSize: 35,
                transition: "font-size 0.3s",
                "&:hover": { fontSize: 38 }
              }}
              style={{ color: "white" }}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              sx={{
                fontSize: 35,
                transition: "font-size 0.3s",
                "&:hover": { fontSize: 38 }
              }}
            />
          )}
        </div>
        <div
          className="mt-4 
        hover:text-blue-700
        transition duration-300 ease-in-out
        transform cursor-pointer"
        >
          <ShareIcon
            sx={{
              fontSize: 35,
              transition: "font-size 0.3s",
              "&:hover": { fontSize: 38 }
            }}
          />
        </div>
        <div
          className="mt-4
        hover:text-blue-700
        transition duration-300 ease-in-out
        transform cursor-pointer"
        >
          <CompareArrowsIcon
            sx={{
              fontSize: 35,
              transition: "font-size 0.3s",
              "&:hover": { fontSize: 38 },
            }}
          />
        </div>
      </div>
    </div>
  );
}
