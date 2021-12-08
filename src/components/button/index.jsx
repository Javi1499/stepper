import React from 'react'
import {Button} from './styled'
const Component = ({action, text, isActive, isFinalStep}) => {
    return ( 
        <Button isFinalStep={isFinalStep} isActive={isActive} onClick={action} disabled={!isActive}>{isFinalStep ?"Finish":text}</Button>
     );
}
 
export default Component;

export {Component as Button}