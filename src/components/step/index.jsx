import React from 'react'
import {Step, Text} from "./styled"
const Component = ({id, currentStep}) => {

    return ( 
        <Step  isActive={currentStep>=id}>
            <Text>{`Step ${id}`}</Text>
        </Step>
     );
}
 
export default Component;
export {Component as Step}