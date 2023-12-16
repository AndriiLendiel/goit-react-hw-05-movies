
import {Outlet,NavLink} from 'react-router-dom'
import { NavList, NavItem,Header, Nav } from './SharedLayout.styled'
import { Suspense } from 'react'
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
<Suspense fallback={<h1>Loading...</h1>}>
<Outlet/>
</Suspense>

</main>

</>
    )
}

export default SharedLayout