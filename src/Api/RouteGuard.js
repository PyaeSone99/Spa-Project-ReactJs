import { Navigate } from "react-router-dom";
import { useLoginContext } from "./LoginContextApi"

const RouteGuard = ({children}) =>{
    const {loggedIn} = useLoginContext();
    if (loggedIn)
        return children;
    else
        return <Navigate to="/" replace/>
}

export default RouteGuard;