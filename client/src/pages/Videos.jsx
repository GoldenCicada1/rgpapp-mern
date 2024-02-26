import { useRef, useState } from "react";
import VideoFooter from "../components/videoComponents/VideoFooter";
import VideoSideBar from "../components/videoComponents/VideoSideBar";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import VisibilityIcon from "@mui/icons-material/Visibility";


export default function Videos() {
  const [playing, setPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    }
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative flex">
      <div className="flex-1 relative">
        {/* Render thumbnail image if video is not loaded */}
        {!videoLoaded && (
          <img
            src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/thumbnail.jpg?alt=media&token=4d43377e-a88f-4c2e-a3fc-8653cca48fe4"
            className="w-full h-auto object-cover"
          />
        )}

        {/* Render video if loaded */}
        <video
          onClick={handleVideoPress}
          className={`w-full h-auto object-cover ${
            videoLoaded ? "" : "hidden"
          }`}
          loop
          ref={videoRef}
          playsInline
          src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/6.mp4?alt=media&token=a12dde1e-e55f-4140-b207-015042e4eef8"
          onLoadedData={handleVideoLoaded}
        ></video>
        <VideoFooter />
      </div>
      <div className="absolute p-3 flex-row-1 right-0">
        <VideoSideBar />
      </div>

      <div className="absolute top-0 p-2">
        <button
          className="w-full inline-flex items-center shadow-xl
                    justify-center px-1  bg-blue-500 font-bold 
                    hover:bg-blue-700 disabled:opacity-80
                    text-base text-white rounded-md transition-all duration-500"
        >
          <ReadMoreIcon sx={{ fontSize: 35 }} />
        </button>
      </div>
      <div className="absolute top-0 right-0 p-2">
        <h1 className="flex items-center bg-blue-500 text-white font-bold px-2 py-1 rounded-md shadow-xl">
          <span className="mr-1 text-center">
            100,000
            <div className="flex flex-col text-xs text-center">
              <span className="">
                <sup>Tsh</sup>/<sub>month</sub>
              </span>
            </div>
          </span>
        </h1>
      </div>
      <div className="absolute items-center bottom-0 right-0 p-3">
        <div>
          <button
            className="w-full inline-flex items-center shadow-xl
                    justify-center px-4 py-1 mb-1.5 bg-blue-500 font-bold 
                    hover:bg-blue-700 disabled:opacity-80
                    text-base text-white rounded-md transition-all duration-500"
          >
            RENT
          </button>
        </div>
        <div className="text-center text-xs items-center text-white justify-center">
          <p>
            2,000
            <VisibilityIcon sx={{ fontSize: 16, marginLeft: "0.5rem" }} />
          </p>
        </div>
      </div>
    </div>
  );
}
