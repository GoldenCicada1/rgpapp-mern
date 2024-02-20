import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function LocationDetails() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <h1 className="flex-col text-center text-xl font-bold text-blue-600 mb-5">
        Location Details
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block mb-1 font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="address"
            className="block mb-1 font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter address"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="country"
            className="block mb-1 font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter country"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="state_region"
            className="block mb-1 font-medium text-gray-700"
          >
            State/Region
          </label>
          <input
            type="text"
            id="state_region"
            name="state_region"
            placeholder="Enter state or region"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="city"
            className="block mb-1 font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        
        <div className="w-full">
          <label
            htmlFor="zip_code"
            className="block mb-1 font-medium text-gray-700"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="zip_code"
            name="zip_code"
            placeholder="Enter zip code"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
       
        <div className="w-full">
          <label
            htmlFor="neighborhood"
            className="block mb-1 font-medium text-gray-700"
          >
            Neighborhood
          </label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            placeholder="Enter neighborhood (optional)"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="school_district"
            className="block mb-1 font-medium text-gray-700"
          >
            School District
          </label>
          <input
            type="text"
            id="school_district"
            name="school_district"
            placeholder="Enter school district (optional)"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="crime_rate"
            className="block mb-1 font-medium text-gray-700"
          >
            Crime Rate
          </label>
          <input
            type="number"
            id="crime_rate"
            name="crime_rate"
            placeholder="Enter crime rate (optional)"
            className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base"
          />
        </div>
        <div className="w-full">
  <label htmlFor="coordinates" className="block mb-1 font-medium text-gray-700">Coordinates</label>
  <input type="text" id="coordinates" name="coordinates" placeholder="Enter coordinates (latitude, longitude)" className="w-full rounded-l-md py-2.5 px-4 shadow-xl text-dark text-base font-medium border border-gray-300 focus:ring focus:ring-gray-300 focus:outline-none focus:border-primary placeholder-light placeholder-base" />
</div>
      </div>
    </div>
  );
}
