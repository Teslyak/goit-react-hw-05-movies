import { Route, Routes, useNavigate} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Home = lazy(()=> import("page/Home"))
const Movies = lazy(() => import("page/Movies"))
const MovieDetails = lazy(() => import("./MovieDetails"))
const Cast = lazy(() => import("./Cast"))
const Reviews = lazy(() => import("./Reviews"))

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/movies" element={<Movies />} />
          
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            
            <Route path="cast" element={<Cast />} />
            
            <Route path="reviews" element={<Reviews />} />
            
          </Route>
          
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Suspense>
      
   
    </>
  );
};


