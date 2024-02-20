import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";


export default function ProductDetails() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <h1 className="flex-col text-center text-xl font-bold text-blue-600 mb-5">
        Product Details
      </h1>
      <div className="w-full">
  <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
  <input type="text" id="name" name="name" placeholder="Enter product name" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />

  <label htmlFor="description" className="block mt-4 mb-1 font-medium text-gray-700">Description</label>
  <textarea id="description" name="description" placeholder="Enter product description" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"></textarea>

  <label htmlFor="regularPrice" className="block mt-4 mb-1 font-medium text-gray-700">Regular Price</label>
  <input type="number" id="regularPrice" name="regularPrice" placeholder="Enter regular price" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />

  <label htmlFor="discountPrice" className="block mt-4 mb-1 font-medium text-gray-700">Discount Price</label>
  <input type="number" id="discountPrice" name="discountPrice" placeholder="Enter discount price" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />

  <label htmlFor="size" className="block mt-4 mb-1 font-medium text-gray-700">Size</label>
  <input type="number" id="size" name="size" placeholder="Enter product size" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />

  <div className="mt-4">
    <label htmlFor="furnished" className="inline-flex items-center cursor-pointer">
      <input type="checkbox" id="furnished" name="furnished" className="h-5 w-5 mr-2 rounded border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary" />
      <span className="text-gray-700">Furnished</span>
    </label>
  </div>

  <div className="mt-4">
    <label htmlFor="parking" className="inline-flex items-center cursor-pointer">
      <input type="checkbox" id="parking" name="parking" className="h-5 w-5 mr-2 rounded border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary" />
      <span className="text-gray-700">Parking</span>
    </label>
  </div>

  <label htmlFor="category" className="block mt-4 mb-1 font-medium text-gray-700">Category</label>
  <select id="category" name="category" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base">
    <option value="" disabled selected>Select category</option>
    <option value="Residential">Residential</option>
    <option value="Commercial">Commercial</option>
    <option value="Industrial">Industrial</option>
    <option value="Agricultural">Agricultural</option>
    <option value="Special Purpose">Special Purpose</option>
    <option value="Mixed-Use">Mixed-Use</option>
    <option value="Vacant Land">Vacant Land</option>
  </select>

  <label htmlFor="productType" className="block mt-4 mb-1 font-medium text-gray-700">Product Type</label>
  <select id="productType" name="productType" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base">
    <option value="" disabled selected>Select product type</option>
    <option value="land">Land</option>
    <option value="building">Building</option>
  </select>

  <div className="mt-4">
    <label htmlFor="offer" className="inline-flex items-center cursor-pointer">
      <input type="checkbox" id="offer" name="offer" className="h-5 w-5 mr-2 rounded border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary" />
      <span className="text-gray-700">Offer</span>
    </label>
  </div>

  <div className="mt-4">
    <label htmlFor="active" className="inline-flex items-center cursor-pointer">
      <input type="checkbox" id="active" name="active" className="h-5 w-5 mr-2 rounded border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary" />
      <span className="text-gray-700">Active</span>
    </label>
  </div>

 
      </div>
    </div>
  )
}
