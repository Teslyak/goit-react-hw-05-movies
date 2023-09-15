import { Layout } from "components/Layout"
import { fetchMovies } from "api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home =  () => {
  const [trendigList, setTrendigList] = useState([])
  
  useEffect(() => {
    

    const queryTrendMovie = async () => {
      
      try {
        const {results}  = await fetchMovies()
        setTrendigList(prevState => {
          const arr = [...results]
         return  arr
        } )
        
      } catch (error) {
        console.log("error", error);
      } finally {

      }
    
    }
    queryTrendMovie()
   
  }, [])
  
  return (
      
        <>
        <Layout/>
            <ul >
        {trendigList.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>
                {!item.original_title ? item.name : item.original_title}
              </Link>
              
           </li>  
           )
         })}
        
            </ul>
            </>
    )
}

