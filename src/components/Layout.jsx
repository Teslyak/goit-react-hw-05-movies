import { NavLink, Outlet } from "react-router-dom"
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Layout = () => {
    return (
        <header> 
            <ul>
                <li>
                    <StyledLink to="/home">
                            Home
                    </StyledLink>
                    
</li>
                <li>
                    <StyledLink to="/movies">
                            Movies
                    </StyledLink>
</li>

            </ul>
            <Outlet/>
        </header>
    )
}