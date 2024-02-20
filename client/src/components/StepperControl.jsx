import PropTypes from 'prop-types';

const StepperControl = ({ handleClick, currentStep, steps }) => {
  const handleNext = () => {
    handleClick('next');
  };

  const handlePrevious = () => {
    handleClick('previous');
  };

  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className={`bg-white text-blue-500 uppercase py-2 px-4 rounded-xl font-semibold
          cursor-pointer border-2 border-blue-300 hover:bg-blue-700 hover:text-white transition duration-200
          ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={currentStep === 1}
      >
        Back
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="bg-blue-600 text-white uppercase py-2 px-4 rounded-xl font-semibold
          cursor-pointer border-2  hover:bg-blue-700 hover:text-white transition duration-200
          ease-in-out "
      >
        {currentStep === steps.length - 0 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

StepperControl.propTypes = {
  handleClick: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default StepperControl;
