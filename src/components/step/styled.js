import styled from 'styled-components'

export const Step = styled.li`
  position: relative;
  background: ${props=> props.isActive ? "#920000" : "#454653"};
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  padding: 10px 30px 10px 40px;
  flex: 1;
  transition: flex 300ms linear 0s, background 100ms linear 0s;
  :after{
    content: " ";
  display: block;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left:${props=> props.isActive ? "#920000" : "#454653" }  20px solid;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  left: 100%;
  margin-left: -2px;
  z-index: 2;
  transition: border-left 100ms linear 0s;
  }
  :before{
    content: " ";
  display: block;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid white;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  margin-left: -1px;
  left: 100%;
  z-index: 1;
  transition: border-left 100ms linear 0s;
  }
`

export const Text = styled.p`
color: #FFF;
margin: 0;
padding: 0;
`