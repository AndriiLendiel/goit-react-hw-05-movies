import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Img = styled.img`
width: 40%;
border-radius: 0.5em;
  overflow: hidden;
`
export const InfoWrapper = styled.div`
margin-left: 25px;
text-align: left;
`
export const Title = styled.h1`
margin-top: 0;
`
export const SubTitle = styled.h3`
font-weight: 700;
margin: 0;
`
export const Link = styled(NavLink)`
margin-left: 25px;
display: flex;
align-items: center;
transition: color 250ms linear, transform 500ms ease-in-out 500ms;
&:hover{
    color:#6d0000;;
}
`