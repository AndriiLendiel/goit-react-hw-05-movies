import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Input = styled.input`
	margin-bottom: 30px;
	position:relative;
	font-size: 1em;
	background: linear-gradient(21deg, #10abff, #1beabd);
	padding: 3px;
    padding-left: 15px;
    margin-left: 25px;
	display: inline-block;
	border-radius: 9999em;
    color: whitesmoke;
`

export const List = styled.ul`
margin-left: 25px;
display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-top: -30px;
`
export const Item = styled.li`
margin-left: 30px;
margin-top: 30px;
width:calc((100% - 4 * 40px) / 4);
&:hover {
    color: aqua
}
`
export const CardMovie = styled.div`
  border-radius: 0.5em;
  overflow: hidden;
  border-bottom: 1px solid black;
height: 250px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
transition: box-shadow, scale 250ms linear, transform 500ms ease-in-out 500ms;
&:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    scale: 1.1;
}
`
export const Img = styled.img`
width: 100%;
` 

export const Parag = styled.p`
width: 100%;
font-size: 14px;
text-align: center;
font-weight: 700;

`








export const StyledLink = styled(NavLink)`
transition: color 250ms linear, transform 500ms ease-in-out 500ms;;
&:hover{
    color: #1640D6;
}
`
