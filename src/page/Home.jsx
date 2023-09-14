import { Layout } from "components/Layout"
import { fetchMovies } from "api";
import { useState } from "react";

export const Home = async (listMovies) => {

    const [trendigList, setTrendigList] = useState([])

  try {
      const { results } = await fetchMovies(listMovies)
      
    //   setTrendigList(prevState => ([...prevState, results]))
    console.log(results); 
  } catch (error) {
    console.log(error);
  }


    return (
        <>
        <Layout/>
            <ul>

            </ul>
            </>
    )
}
Home()