import { getReviews } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"






export const Reviews = () => {
 const [resultReviews, setResultReviews] = useState([])
    const { movieId } = useParams()
    useEffect(() => {
        const queryReviews = async () => {
            try {
                const { results } = await getReviews(movieId)
                setResultReviews([ ...results ] )

      } catch (error) {
        console.log(error);
      }
        }
      

       queryReviews()
    
    }, [movieId])

    return (
        <>
         
            {resultReviews.length ?
               
                <section>
                    <ul>
                        {resultReviews.map(item => {
                            console.log(item)
                            return (
                                <>
                                    <section>
                                        <h3>{`${item.author}`}</h3>
                                        <p>{`${item.content}`}</p>
                                    </section>
                           
                                </>
                            )
                        })
                        }
                    
                    </ul>
               
                </section> : <section><p> "No information to display"</p></section>
            }
           
        </> 
    )



   
    
}