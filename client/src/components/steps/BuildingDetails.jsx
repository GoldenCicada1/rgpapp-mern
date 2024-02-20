import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";


export default function BuildingDetails() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <h1 className="flex-col text-center text-xl font-bold text-blue-600 mb-5">
        Building Details
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
  <div className="w-full">
    <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter name" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="year_built" className="block mb-1 font-medium text-gray-700">Year Built</label>
    <input type="number" id="year_built" name="year_built" placeholder="Enter year built" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="number_of_floors" className="block mb-1 font-medium text-gray-700">Number of Floors</label>
    <input type="number" id="number_of_floors" name="number_of_floors" placeholder="Enter number of floors" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="size" className="block mb-1 font-medium text-gray-700">Size</label>
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
    <label htmlFor="utilities" className="block mb-1 font-medium text-gray-700">Utilities</label>
    <input type="text" id="utilities" name="utilities" placeholder="Enter utilities" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="maintenance_cost" className="block mb-1 font-medium text-gray-700">Maintenance Cost</label>
    <input type="number" id="maintenance_cost" name="maintenance_cost" placeholder="Enter maintenance cost" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>
  <div className="w-full">
    <label htmlFor="management_company" className="block mb-1 font-medium text-gray-700">Management Company</label>
    <input type="text" id="management_company" name="management_company" placeholder="Enter management company" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
  </div>

    </div>
    
    </div>
  )
}
