import { UserAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Component}) => {
    const { currentUser } = UserAuth()

    return currentUser?<Component/>: <Navigate to="/login" />
}
 
export default PrivateRoute;