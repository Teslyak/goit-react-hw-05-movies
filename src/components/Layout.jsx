import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <header> 
            <ul>
                <li>
                    <NavLink to="/home">
                            Home
                    </NavLink>
                    
</li>
                <li>
                    <NavLink to="/movies">
                            Movies
                    </NavLink>
</li>

            </ul>
            <Outlet/>
        </header>
    )
}