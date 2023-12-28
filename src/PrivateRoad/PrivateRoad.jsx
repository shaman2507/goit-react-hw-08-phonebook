import { Navigate } from "react-router"
import { useSelector } from "react-redux"
import { selectAuth } from "store/auth/selectors"

const PrivateRoad = ({
    children}) =>{
    const isAuth = useSelector(selectAuth);
        return isAuth ? children : <Navigate to='/login'/>
    }
    
export default PrivateRoad;