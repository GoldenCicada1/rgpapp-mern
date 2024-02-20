import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    updateWindowDimensions(); // Set initial state

    window.addEventListener("resize", updateWindowDimensions); // Add event listener

    return () => {
      window.removeEventListener("resize", updateWindowDimensions); // Remove event listener on component unmount
    };
  }, []);

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepRef.current = stepsState;
    const current = updateStep(currentStep -2, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div
      key={index}
      className={
        index !== newStep.length - 1
          ? "w-full flex items-center "
          : "flex items-center"
      }
    >
      <div className="relative flex flex-col items-center text-blue-600">
        <div
          className={`rounded-full transition duration-500 ease-in-out
                border-2 border-gray-300 h-12 w-12 flex items-center
                justify-center py-3 ${
                  step.selected
                    ? "bg-blue-600 text-white font-bold bolder border-blue-600"
                    : ""
                }`}
        >
          {/* Display Number */}
          {step.completed ? (
            <span className="text-white- font-bold text-xl"> &#10003;</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium ${
            step.highlighted ? "text-gray-600" : "text-gray-400"
          } ${isSmallScreen ? "hidden" : ""}`}
        >
          {/* Display Description */}
          {step.description}
        </div>
      </div>
      <div
        className={`flex-auto border-t-2 transition duration-700 ease-in-out  ${
          step.completed ? "border-blue-500" : "border-gray-300"
        }`}
      >
        {/* Display Line */}
      </div>
    </div>
  ));

  return (
    <div className="mx-8 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
