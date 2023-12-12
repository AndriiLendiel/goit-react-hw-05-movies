import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background: linear-gradient(115deg, #62cff4, #2c67f2);
  text-align: center;
  overflow: hidden;
margin-bottom: 50px;
`
export const Nav = styled.nav`

    line-height: 60px;
    width: 100%;
`
export const NavList = styled.ul`
display: flex;
`

export const NavItem = styled.li`
a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 10px 15px;
    line-height: 1;
    transition: color 500ms linear, transform 500ms ease-in-out;

        &:hover{
color: grey;
}
}









`