import { getMoviesDetails } from "api"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
export const MovieDetails = () => {
    const [resultMovie, setResultMovie] = useState([])
    const [genres, setGenres] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        const queryDetailsMovie = async () => {
            try {
                const result = await getMoviesDetails(movieId)
                console.log(result);
                setResultMovie({ ...result })
                setGenres(result.genres)
      } catch (error) {
        console.log(error);
      }
        }
      

       queryDetailsMovie()
     
    }, [movieId])
     

    return ( 
        <>
        <div>
                <button>Go back</button>
                {!resultMovie.title ? <p>Sorry, there is no information for this movie</p> :
                    <div>
                        <h1>{`${resultMovie.title} (${!resultMovie.release_date ? "unknown" : resultMovie.release_date.split('-')[0]}) `}</h1>
                        <p>{`User Score: ${!resultMovie.popularity ? "unknown" : resultMovie.popularity ^ 0}%`}</p>
                        <h2>Overview</h2>
                        <p>{`${!resultMovie.overview ? "unknow" : resultMovie.overview}`}</p>
                        <h2>Genres:</h2>
                        <p>{`${genres.map(e => (e.name)).join(", ")}`}</p>
                        <img src={`https://image.tmdb.org/t/p/w500/${resultMovie.poster_path}`} alt={`poster ${resultMovie.title}`} />
                    </div>
                }
            </div>
           
        </>
    )
}


