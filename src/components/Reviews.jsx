import { getReviews } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"






 const Reviews = () => {
 const [resultReviews, setResultReviews] = useState([])
    const { movieId } = useParams()

     useEffect(() => {
        const controller = new AbortController()
        const queryReviews = async () => {
            try {
                const { results } = await getReviews(movieId, controller)
                setResultReviews([ ...results ] )
            } catch (error) {
                
                console.log(error);
                
      }
        }
         queryReviews()
         return () => {
             controller.abort()       
    }
    
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
                                    <li>
                                        <h3 className="font-sans text-2xl mb-5 font-bold">{`${item.author}`}</h3>
                                        <p>{`${item.content}`}</p>
                                    </li>
                           
                                </>
                            )
                        })
                        }
                    
                    </ul>
               
                </section> : <section><p> We don't have any reviews for this movie</p></section>
            }
           
        </> 
    )



   
    
}
export default Reviews