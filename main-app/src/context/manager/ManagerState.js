import managerContext from "./managerContext";
import { useState } from "react";


export default function ManagerState(props) {
    //state for manager
    const blankManager = []
    const [manager, setManager] = useState(blankManager)
    
    //1: To get the manager details
    const getManager = async () => {
        //API CALL
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/get-manager`, {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
    
        const managerDetails = await response.json();
        setManager(managerDetails);
      };

     
  return (
   <managerContext.Provider
   value={{manager, getManager}}
   >
    {props.children}
   </managerContext.Provider>
  )
}
