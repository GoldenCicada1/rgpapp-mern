import Ticker from "react-ticker";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function VideoFooter() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2  text-white">
      <div className="flex items-center mb-2 ">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<VerifiedOutlinedIcon sx={{ color: "green", fontSize: 20 }} />}
        >
          <Avatar
            alt="National Housing"
            src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/download.png?alt=media&token=ed32e14b-67fa-4bb0-8e60-c10fc12adcb0"
            sx={{ width: 50, height: 50, objectFit: "cover" }}
          />
        </Badge>
        <div className="ml-2">
          <h1 className="font-semibold text-sm">National Housing Corporation</h1>
          <p className="text-xs">Government Entity</p>
          <div className="flex items-center">
            <StarIcon sx={{ fontSize: 16 }}/>
            <StarIcon sx={{ fontSize: 16 }}/>
            <StarIcon sx={{ fontSize: 16 }}/>
            <StarHalfIcon sx={{ fontSize: 16 }}/>
            <StarOutlineIcon sx={{ fontSize: 16 }} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs">
        <div>
          <h2 >REAL GENERIC PLATFROM</h2>
          <Ticker mode="smooth">
            {({ index }) => <p className="text-xs">This is item #{index}</p>}
          </Ticker>
        </div>
      </div>
    </div>
  );
}
