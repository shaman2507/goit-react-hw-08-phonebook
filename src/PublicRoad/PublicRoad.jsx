import { Navigate } from "react-router"
import { useSelector } from "react-redux"
import { selectAuth } from "store/auth/selectors"

const PublicRoad = ({
    children}) => {
    const isAuth = useSelector(selectAuth);
        return !isAuth ? children : <Navigate to='/'/>
    }
    
export default PublicRoad