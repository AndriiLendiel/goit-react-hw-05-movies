
import {Outlet,NavLink} from 'react-router-dom'

const Layout = () => {
    return (
<>
<header style={{backgroundColor: 'red'}}>
<nav style={{backgroundColor: 'orange'}}>
        <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
    </ul>
</nav>
</header>
<main>
<Outlet/>
</main>

</>
    )
}

export default Layout