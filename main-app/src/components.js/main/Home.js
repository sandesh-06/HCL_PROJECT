import React, { useContext, useEffect } from "react";
import managerContext from "../../context/manager/managerContext";
import Navbar from "./Navbar";
import Settings from "./Settings";
import { Navigate } from "react-router-dom";

import ManagerDetails from "./homeComponents/ManagerDetails";
import CurrentProject from "./homeComponents/CurrentProject";
import TaskDisplay from "./homeComponents/TaskDisplay";

export default function Home() {
  const context = useContext(managerContext);

  //to get the manager details
  const { manager, getManager } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getManager();
    }
    <Navigate to="/" />;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>

      <div className="grid grid-cols-4 grid-rows-4 w-screen h-screen gap-5 p-4 lg:ml-[250px]">
        <ManagerDetails manager={manager} />
        <TaskDisplay />
        <CurrentProject />
      </div>
      <Settings />
    </>
  );
}
