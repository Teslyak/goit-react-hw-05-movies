import { getSearchMovie } from "api"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export const Movies = () => {
    const [searchMovie, setSearchMovie] = useState("")
    const [resultSearchMovie, setResultSearchMovie] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        setSearchMovie(e.currentTarget.elements.searchWord.value.trim())
       
}

    useEffect(() => {
        if (!searchMovie) {
            return
        }
        const querySearchMovie = async () => {

            try {
                const {results} = await getSearchMovie(searchMovie)
                setResultSearchMovie([...results])
            } catch (error) {     
            console.log("error", error);
         }
        }
        querySearchMovie()
    
    }, [searchMovie])
    



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