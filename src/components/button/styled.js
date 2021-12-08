import styled from "styled-components";

export const Button = styled.button`
background-color: ${props => props.isFinalStep ? "#007928" : props.isActive ? "#DA0037" : "#B9B9B9"};
color: ${props => props.isActive ? "#FFFFFF":"#000000"};
border-radius: 10px;
width: 80px;
height: 50px;
margin: 5px;
`