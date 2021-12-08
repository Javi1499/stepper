import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template: 
"stepper stepper" auto
"information information" 400px
"back next"100px/
50% 50%
;
width: 50%;
height: fit-content;
border: 1px solid #000;
margin: 0 auto;
`

export const StepperContainer = styled.div`
grid-area: stepper;
`

export const Information = styled.div`
grid-area: information;
text-align: center;
>p{
    font-size: 24px;
}
`


export const BackButton = styled.div`
grid-area: back;
display: flex;
justify-content: flex-start;
`
export const NextButton = styled.div`
grid-area: next;
display: flex;
justify-content: flex-end;
`
