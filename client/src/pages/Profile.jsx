import { useSelector } from "react-redux";


export default function Profile() {
  const {currentUser} = useSelector(state => state.user)
  const { loading, error } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl font-semibold text-center
    my-7">
      Profile
    </h1>
    <form className="flex flex-col gap-4 ">
      <img className="rounded-full h-24 w-24 object-cover
      cursor-pointer self-center 
      shadow-xl mt-2" 
          src={currentUser.avatar} alt="profile" />
          <input  type="text" placeholder="Username" id="username"
            className="border p-3 rounded-lg
            shadow-xl"/>
          <input  type="text" placeholder="Email" id="email"
            className="border p-3 rounded-lg
            shadow-xl"/>
          <input  type="text" placeholder="Password" id="password"
            className="border p-3 rounded-lg
            shadow-xl"/>
            
            <button disabled={loading}
          className="bg-blue-400 text-white p-3 
          rounded-lg uppercase hover:bg-blue-500
          disabled:opacity-80
          shadow-xl">
          {loading ? 'Updating...' : 'Update'}
            </button>
    </form>
    {error && <p className="text-red-500 mt-5">{error}</p>}
    <div className="flex justify-between mt-5">
      <span className="text-red-600 font-bold cursor-pointer">
      Delete Account
      </span>
      <span className="text-red-600 font-bold 
      cursor-pointer">
      Sign Out
      </span>
    </div>
    </div>
  )
}
