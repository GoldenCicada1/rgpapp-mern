import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';

export default function VideoSideBar() {
  return ( 
    <div className="flex text-white right-0 flex-col items-end">
    <div className='mt-10'>
  <div className="mb-5 flex flex-col items-end">
    <SquareFootIcon />
    <span className="ml-4">5,000</span>
  </div>
  <div className="mb-5 flex flex-col items-end">
    <HotelIcon />
    <span className="ml-4">2 beds</span>
  </div>
  <div className="mb-5 flex flex-col items-end">
    <BathtubIcon />
    <span className="ml-4">3 baths</span>
  </div>

    </div>
    <div className='mt-16'>
  <div className="flex flex-col items-end">
    <FavoriteIcon />
  </div>
  <div className="flex flex-col items-end mt-8">
    <ShareIcon />
  </div>
  <div className="flex flex-col items-end mt-8">
    <CompareArrowsIcon />
  </div>

    </div>
</div>
  )
}
