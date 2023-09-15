import { Layout } from "components/Layout"
import { Link } from "react-router-dom"

export const Movies = () => {
    return (
        <>
            <Layout/>
        <div>
            <Link to="/movies/">Movies</Link>
            </div>
            </>
    )
}