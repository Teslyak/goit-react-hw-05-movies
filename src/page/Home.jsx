
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "api";
import { useState, useEffect} from "react";



export const Home = () => {
  const [trendigList, setTrendigList] = useState([])
 
  useEffect(() => {
    

    const queryTrendMovie = async () => {
      
      try {
        const {results}  = await fetchTrendingMovies()
        setTrendigList([...results])
        
      } catch (error) {
        console.log("error", error);
      } finally {

      }
    
    }
    queryTrendMovie()
   
  }, [])
 
  return (
      
    <>
           <ul >
        {trendigList.map(item => {
          return (
            <li key={item.id} >
              <Link to={`movies/${item.id}`}  >
                {!item.title ? item.name : item.title}
              </Link>
              </li>
           )
         })}
        
      </ul>
      
            </>
    )
}

