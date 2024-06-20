import React, { useState } from "react";
import "./styles.scss"; // Import CSS file for styling
import BrowserCompanyInfo from "../BrowserCompanyInfo";

interface StepperProps {
  steps: { title: string; content: string }[]; // Updated props to include title and content for each step
}

interface StepperState {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [state, setState] = useState<StepperState>({ currentStep: 0 });

  const nextStep = () => {
    if (state.currentStep < steps.length - 1) {
      setState({ ...state, currentStep: state.currentStep + 1 });
    }
  };

  const prevStep = () => {
    if (state.currentStep > 0) {
      setState({ ...state, currentStep: state.currentStep - 1 });
    }
  };

  return (
    <div className="stepper">
      <div className="step-indicator">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step-container">
              <div
                className={`step ${index <= state.currentStep ? "active" : ""}`}
              >
                {index + 1}
              </div>
              <div className="step-title">{step.title}</div>
            </div>
            {/* {index !== steps.length - 1 && <div className={`step-divider ${index < state.currentStep ? 'active' : ''}`}></div>} */}
          </React.Fragment>
        ))}
      </div>
      <div className="step-content">
        <div className="content">
          {state.currentStep === 0 ? (
            <BrowserCompanyInfo />
          ) : (
            <span>{steps[state.currentStep].content}</span>
          )}
        </div>
        <div className="step-buttons">
          <button onClick={prevStep} disabled={state.currentStep === 0}>
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={state.currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
