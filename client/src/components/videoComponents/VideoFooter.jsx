import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function VideoFooter() {
  const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 right-0 p-2  text-white">
      <div className="flex items-center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <VerifiedOutlinedIcon sx={{ color: "green", fontSize: 20 }} />
          }
        >
          <Avatar
            src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/download.png?alt=media&token=ed32e14b-67fa-4bb0-8e60-c10fc12adcb0"
            sx={{
              width: 40,
              height: 40,
              objectFit: "cover",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Badge>
        <div className="ml-2">
          <h1 className="font-bold text-xs ">National Housing Corporation</h1>
          <p className="text-xs">Government Entity</p>
          <div className="flex items-center">
            <StarIcon sx={{ fontSize: 16 }} />
            <StarIcon sx={{ fontSize: 16 }} />
            <StarIcon sx={{ fontSize: 16 }} />
            <StarHalfIcon sx={{ fontSize: 16 }} />
            <StarOutlineIcon sx={{ fontSize: 16 }} />
          </div>
        </div>
      </div>

      <div className="flex items-center text-xs  ml-2">
        <PinDropIcon sx={{ fontSize: 16 }} />
        <p className="mr-2">Kunduchi, Dar es salaam</p>
        <div>
          <MoreHorizIcon
            sx={{ fontSize: 25 }}
            onClick={() => setIsMoreInfoVisible(!isMoreInfoVisible)}
            className={`cursor-pointer ml-auto ${
              isMoreInfoVisible ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isMoreInfoVisible && (
        <div className="ml-7 rounded-md ">
          <p className="text-xs">
            <span>Updated:</span> 5 <span>weeks ago</span>
          </p>
          <p className="text-xs">
            <span>Min Rental:</span> 4 <span>months</span>
          </p>
        </div>
      )}
    </div>
  );
}
