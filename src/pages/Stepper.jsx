import React, { useState, useEffect } from 'react';
import { Button } from '../components/button';
import { useParams, useHistory } from 'react-router';
import Stepper from '../components/stepper'
import {Container,BackButton, Information, NextButton, StepperContainer} from "./styled"

const Component = () => {
  const {idStep} = useParams()
    const [currentStep, setCurrentStep] = useState(1)
    const informationSteps = [{id:1, data:"Step 1"}, {id:2, data:"Step 2"}, {id:3, data:"Step 3"},{id:4, data:"Step 4"}]
    
    const renderText = informationSteps.filter(step=>step.id === currentStep).map(step=>step.data);
const routerHistory = useHistory()
    const nextStep = ()=>{
      routerHistory.push(`/step/${currentStep+1}`)
    }
    const backStep = ()=>{
      routerHistory.push(`/step/${currentStep-1}`)
    }
    useEffect(() => {
      
      setCurrentStep(Number(idStep))
    }, [idStep])
      return (
        <Container className="App">
          <StepperContainer>
          <Stepper currentStep = {currentStep} setCurrentStep={setCurrentStep} />
          </StepperContainer>
          <Information>
            <p> {renderText}</p>
          </Information>
          <BackButton>
            <Button isActive={currentStep!==1}text={"Back"} action={() =>backStep()}/>
          </BackButton>
          <NextButton>
          <Button isFinalStep={currentStep===4} isActive={true}text={"Next"} action={currentStep===4?()=>alert("Done"):()=>nextStep()}/>
          </NextButton>
        </Container>
      );
}

export default Component;
export { Component as StepperPage };