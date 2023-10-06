
import { Navigate } from 'react-router-dom';

export default function UnauthorizedRoutes({children}) {
    if(localStorage.getItem("token")===null){
      return children
    }
    else{
        return <Navigate to="/home"/>
    }

}
