import { Route, Routes, useNavigate} from "react-router-dom";
import { Home } from "page/Home";
import { Movies } from "page/Movies";
import { MovieDetails } from "./MovieDetails";
import { useEffect } from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

function NotFound() {
  const navigate = useNavigate();
   useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return null; 
}

export const App = () => {

  return (
    <>

    <header> 
            <ul>
                <li>
                    <StyledLink to="/">
                            Home
                    </StyledLink>
                    
</li>
                <li>
                    <StyledLink to="/movies">
                            Movies
                    </StyledLink>
</li>

            </ul>
           
      </header>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" />
        <Route path="/movies/:movieId/reviews" />
       <Route path="*" element={<NotFound />} />
    </Routes> 
    </>
  );
};


