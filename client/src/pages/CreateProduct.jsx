import { useState } from "react";
import Stepper from "../components/stepper";
import { StepperContext } from "../contexts/StepperContext";
import StepperControl from "../components/StepperControl";
import LocationDetails from "../components/steps/LocationDetails";
import LandDetails from "../components/steps/LandDetails";
import BuildingDetails from "../components/steps/BuildingDetails";
import ProductDetails from "../components/steps/ProductDetails";
import Final from "../components/steps/Final";

export default function CreateProduct() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Location Details",
    "Land Details",
    "Building Details",
    "Product Details",
    "Final",
  ];

  const handleClick = (direction) => {
    if (direction === 'next') {
      setCurrentStep(currentStep + 1);
    } else if (direction === 'previous') {
      setCurrentStep(currentStep - 1);
    }
  };

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <LocationDetails />;
      case 2:
        return <LandDetails />;
      case 3:
        return <BuildingDetails />;
      case 4:
        return <ProductDetails />;
      case 5:
        return <Final />;
      default:
        return null;
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper 
          steps={steps} 
          currentStep={currentStep} 
        />

        {/* Display Components */}
        <div className="my-10 p-10 ">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displaySteps(currentStep)}
          </StepperContext.Provider> 
        </div>
      </div>
      
      {/* Navigation Controls*/}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
}
