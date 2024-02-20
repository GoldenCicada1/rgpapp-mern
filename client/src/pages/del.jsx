
import Stepper from "../components/Stepper"
import StepperControl from "../components/StepperControl";
import LocationDetails from "../components/steps/LocationDetails";
import LandDetails from "../components/steps/LandDetails";
import BuildingDetails from "../components/steps/BuildingDetails";
import ProductDetails from "../components/steps/ProductDetails";
import Final from "../components/steps/Final";
import { useState } from "react";

const [currentStep, setCurrentStep] = useState(1);
const steps = [
  "Location Details",
  "Land Details",
  "Building Details",
  "Product Details",
  "Final",
];

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
  }
};

const handleclick = (direction) => {
  let newStep = currentStep;
  direction === "next" ? newStep++ : newStep--;

  newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}
export default function CreateProduct() {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper
          steps={steps}
          currentStep={currentStep}
           />
        </div>
        {/* Navigation Controls*/}
        <StepperControl 
        handleclick={handleclick}
        currentStep={currentStep}
        steps={steps}

        />
      </div>
  )
}
