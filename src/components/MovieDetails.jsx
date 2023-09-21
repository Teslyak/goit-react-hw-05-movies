import { getMoviesDetails } from "api"
import { useEffect, useState, Suspense} from "react"
import { Link, Outlet, useParams } from 'react-router-dom';




 const MovieDetails = () => {
    const [resultMovie, setResultMovie] = useState({})
    const [genres, setGenres] = useState([])
     const { movieId } = useParams()
     const [error,setError] = useState(true)
     useEffect(() => {
         const controller = new AbortController()
        const queryDetailsMovie = async () => {
            try {
                const result = await getMoviesDetails(movieId, controller)
                setResultMovie({ ...result })
                setGenres(result.genres)
               
      } catch (error) {
                console.log("error", error);
                if (error.code === "ERR_BAD_REQUEST") {
                    setError(false)
                }
                
      }
         }
         
         queryDetailsMovie()
         
         return () => {
             controller.abort()
             
             
         }
         
     
    }, [movieId])
     

    return ( 
        <>
           
            <div>
                <button className="mb-5 font-normal font-sans ">
                    <Link to="/"> &#8592; Go back</Link>
                </button>
                 { !error ? <p>Sorry, there is no information for this movie</p> :
                        <div className="flex mb-3">
                            {resultMovie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${resultMovie.poster_path}`} alt={`poster ${resultMovie.title}`} width={250} /> :
                                <img src="https://via.placeholder.com/200x200.png?text=NO+PHOTO" alt="no_photo" width={250} />}
                            <div className="ml-5">
                                <h1 className="font-sans text-3xl mb-5 font-bold">{`${resultMovie.title} (${!resultMovie.release_date ? "unknown" : resultMovie.release_date.split('-')[0]}) `}</h1>
                                
                                <p className="font-sans mb-5 ">{`User Score: ${!resultMovie.vote_average ? "unknown" : resultMovie.vote_average ^ 0}%`}</p>
                                
                                <h2 className="font-sans text-2xl mb-5 font-bold">Overview</h2>
                                
                                <p className="font-sans mb-5">{`${!resultMovie.overview ? "unknow" : resultMovie.overview}`}</p>
                                
                                <h2 className="font-sans text-2xl mb-5 font-bold">Genres:</h2>
                                
                                <p className="font-sans ">{`${genres.map(e => (e.name)).join(", ")}`}</p>

                             </div>

                        
                       
                    </div>
                   
                 } 

            </div>
        
        
            {resultMovie.title &&
            <div className="border-y-4 ">
                <p>Additional information</p>
                <ul className="ml-3 ">
                    <li className="text-blue-600">
                        <Link to="cast" >Cast</Link>     
                    </li>
                    <li className="text-blue-600">
                        <Link to="reviews" >Reviews</Link>
                        
                    </li>
                </ul>
            </div>
            
            }
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
        </>
    )
}

export default MovieDetails

