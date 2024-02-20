import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";


export default function LandDetails() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <h1 className="flex-col text-center text-xl font-bold text-blue-600 mb-5">
        Land Details
      </h1>
    
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
  <div className="w-full">
    <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter name" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="size" className="block mb-1 font-medium text-gray-700">Size (in square meters)</label>
    <input type="number" id="size" name="size" placeholder="Enter size" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="description" className="block mb-1 font-medium text-gray-700">Description</label>
    <textarea id="description" name="description" rows="3" placeholder="Enter description" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"></textarea>
  </div>
  <div className="w-full">
    <label htmlFor="price" className="block mb-1 font-medium text-gray-700">Price</label>
    <input type="number" id="price" name="price" placeholder="Enter price" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="features" className="block mb-1 font-medium text-gray-700">Features</label>
    <input type="text" id="features" name="features" placeholder="Enter features (comma separated)" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="zoning" className="block mb-1 font-medium text-gray-700">Zoning</label>
    <input type="text" id="zoning" name="zoning" placeholder="Enter zoning" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="soil_structure" className="block mb-1 font-medium text-gray-700">Soil Structure</label>
    <input type="text" id="soil_structure" name="soil_structure" placeholder="Enter soil structure" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="topography" className="block mb-1 font-medium text-gray-700">Topography</label>
    <input type="text" id="topography" name="topography" placeholder="Enter topography" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="registered" className="block mb-1 font-medium text-gray-700">Registered</label>
    <select id="registered" name="registered" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base">
      <option value="false">No</option>
      <option value="true">Yes</option>
    </select>
  </div>
  <div className="w-full">
    <label htmlFor="registration_date" className="block mb-1 font-medium text-gray-700">Registration Date</label>
    <input type="date" id="registration_date" name="registration_date" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="accessibility" className="block mb-1 font-medium text-gray-700">Accessibility</label>
    <input type="text" id="accessibility" name="accessibility" placeholder="Enter accessibility" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
</div>

    </div>
  )
}
