import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';


export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <header className="bg-blue-100 shadow-md">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
        <img src='https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/Official%20Logo2.png?alt=media&token=7cb15219-59ce-43a8-b926-6cd35cc0dfe3'
        alt='logo'
        className='h-5 sm:h-7 cursor-pointer' />
        </Link>
        
    <form className="bg-blue-50 p-2 rounded-lg flex items-center">
        <input type="text" placeholder="Search" 
        className="bg-transparent focus:outline-none w-24 sm:w-64" />
        <FaSearch className="text-blue-400"/>
    </form>
    <ul className="flex gap-4">
        <Link to="/">
        <li className="hidden sm:inline text-blue-400 hover:underline">Home</li>
        </Link>
        <Link to="/about">
        <li className="hidden sm:inline text-blue-400 hover:underline">About</li>
        </Link>
        <Link to="/profile">
        {currentUser ? (
          <img className="rounded-full h-8 w-8 object-cover" 
          src={currentUser.avatar} alt="profile" />

        ) :(
        <li className="text-blue-400 hover:underline">Sign In</li>

        )}
        </Link>
    </ul>
    </div>
    </header>
  )
}
