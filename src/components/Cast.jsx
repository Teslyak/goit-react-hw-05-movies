import { getCredits } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Cast = () => {
     const [resultCredits, setResultCredits] = useState([])
    const { movieId } = useParams()
    console.log(movieId);
    useEffect(() => {
        const queryCredits = async () => {
            try {
                const result = await getCredits(movieId)
                console.log(result);
                setResultCredits({ ...result })
                console.log(result);
      } catch (error) {
        console.log(error);
      }
        }
      

       queryCredits()
     
    }, [movieId])

    return (
        <>
            <div>Cast</div>
        </> 
    )
}