
import {Outlet,NavLink} from 'react-router-dom'
import { NavList, NavItem,Header, Nav } from './SharedLayout.styled'
const SharedLayout = () => {
    return (
<>
<Header>
<Nav>
        <NavList>
        <NavItem><NavLink to='/'>Home</NavLink></NavItem>
        <NavItem><NavLink to='/movies'>Movies</NavLink></NavItem>
    </NavList>
</Nav>
</Header>
<main>
<Outlet/>
</main>

</>
    )
}

export default SharedLayout