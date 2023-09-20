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
            { resultMovie.title &&
            <div>
                <button>
                    <Link to="/"> &#8592; Go back</Link>
                </button>
                 { !error ? <p>Sorry, there is no information for this movie</p> :
                    <div>
                        <h1>{`${resultMovie.title} (${!resultMovie.release_date ? "unknown" : resultMovie.release_date.split('-')[0]}) `}</h1>
                        <p>{`User Score: ${!resultMovie.vote_average ? "unknown" : resultMovie.vote_average ^ 0}%`}</p>
                        <h2>Overview</h2>
                        <p>{`${!resultMovie.overview ? "unknow" : resultMovie.overview}`}</p>
                        <h2>Genres:</h2>
                        <p>{`${genres.map(e => (e.name)).join(", ")}`}</p>

                        {resultMovie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${resultMovie.poster_path}`} alt={`poster ${resultMovie.title}`} width={250} /> :
                         <img src="https://via.placeholder.com/200x200.png?text=NO+PHOTO" alt="no_photo"  width={250} />}
                       
                    </div>
                   
                 } 

            </div>
}
        
            {resultMovie.title &&
            <div>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast" >Cast</Link>     
                    </li>
                    <li>
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

