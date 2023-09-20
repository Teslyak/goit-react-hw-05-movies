import { getSearchMovie } from "api"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";


 const Movies = () => {
    const [resultSearchMovie, setResultSearchMovie] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    
    const onSubmit = (e) => {
        e.preventDefault()
        setSearchParams({ searchMovie: e.currentTarget.elements.searchWord.value.trim() })

}

     useEffect(() => {
         const controller = new AbortController()
        
         const searchWord = searchParams.get("searchMovie")
         
         if (!searchWord) {
            
            return
        }
        const querySearchMovie = async () => {

            try {
                const {results} = await getSearchMovie(searchWord, controller)
                setResultSearchMovie([...results])
            } catch (error) {     
            console.log("error", error);
         }
        }
         querySearchMovie()
         return () => {
             controller.abort()
             
    }
    
    }, [searchParams])
    



    return (
        
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="searchWord"></input>
                <button type="submit">Search</button>
            </form>
            <section>
                <ul>
                {resultSearchMovie.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={`${item.id}`}  >
                                {!item.title ? item.name : item.title}
    
                            </Link>
                            
                        </li>     
                    )
                    
                })}
                    
                </ul>
                
            </section>
            
            </>
    )
}
    export default Movies