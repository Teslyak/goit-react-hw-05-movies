import { getCredits } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Cast = () => {
    
    const [resultCredits, setResultCredits] = useState([])
    const { movieId } = useParams()
    useEffect(() => {
        const queryCredits = async () => {
            try {
                const result = await getCredits(movieId)
                
                setResultCredits([ ...result.cast ] )
                
      } catch (error) {
        console.log("error", error);
      }
        }
      

       queryCredits()
    
    }, [movieId])

    return (
        <>
            {resultCredits.length ? 
            <section>
                <ul>
                    {resultCredits.map(item => {
                    return ( 
                        <>
                            {item.profile_path &&
                                <li key={item.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={`${item.original_name}`} width={100} />
                                    <p>{`${item.original_name}`}</p>
                                </li>}
                        </>
                        )
                            
                        
     
                   
                    })
                    } 
                    
                </ul>
               
                </section> : <section><p> "We don't have any reviews for this movie"</p></section>
            }


        </> 
    )
}