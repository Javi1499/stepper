import React from 'react'
import { Step } from "../step"
import { Stepper } from "./styled"
const Component = ({ currentStep, setCurrentStep }) => {


    return (
        <Stepper >
            <Step id={1} setCurrentStep={setCurrentStep} currentStep={currentStep} />
            <Step id={2} setCurrentStep={setCurrentStep} currentStep={currentStep} />
            <Step id={3} setCurrentStep={setCurrentStep} currentStep={currentStep} />
            <Step id={4} setCurrentStep={setCurrentStep} currentStep={currentStep} />
        </Stepper >
    );
}

export default Component;
export { Component as Stepper }