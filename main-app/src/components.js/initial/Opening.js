import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {GrUserManager} from 'react-icons/gr'
import {GrUserWorker} from 'react-icons/gr'



function Opening() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("token")!==null){
      navigate("/home")
    }
  })
  
  return (
    <>
     <div className="grid h-screen w-screen grid-cols-2">
      <div className="relative mr-1">
        <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" 
        className="w-screen h-screen object-cover brightness-50"/>
        <Link to="/employer-login">
          <button className="text-black font-extrabold bg-gradient-to-r from-[#1a1625] to-[#ba9ffb] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-Quicksand rounded-lg px-5 py-2.5 text-center text-[50px] hover:shadow-lg absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex items-center">Manager<GrUserManager color="white"/></button>
        </Link>
      </div>
      
     
      <div className="relative ml-1">
        <img src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" 
        className="w-screen h-screen object-cover brightness-50"/>
        <Link to="/employee-login">
          <button className="text-black font-extrabold bg-gradient-to-r from-[#1a1625] to-[#ba9ffb] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-Quicksand rounded-lg px-5 py-2.5 text-center text-[50px] hover:shadow-lg absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex items-center">Employee<GrUserWorker/></button>
        </Link>
      </div>
     </div>
     </>
  );
}

export default Opening;

/* <div>
          <Link to="/employer-login">
            <button className="p-5 mx-5 text-black rounded-md text-[50px] hover:shadow-lg">
              EMPLOYER
            </button>
          </Link>
        </div>

        <div className="border-l border-black h-full"></div>
        <div className=""  style={{
              backgroundImage: 'linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)), url(../images/employer-background.jpg)',
            }}>
          <Link to="/employee-login">
            <button className="p-5 mx-5 text-black rounded-md text-[50px] hover:shadow-lg"
            >
              EMPLOYEE
            </button>
          </Link>
        </div> */

/*  <div className="flex h-screen">
        <div className="w-1/2 flex items-center relative">
          <img
            src={bgImage1}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <Link to="/employer-login">
            <button
              className="text-white bg-gradient-to-r from-[#1a1625] to-[#ba9ffb] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-Quicksand rounded-lg px-5 py-2.5 text-center text-[50px] hover:shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              EMPLOYER
            </button>
          </Link>
        </div>

        <div className="border-4 border-[#2f2b3a] h-full"></div>

        <div className="w-1/2 flex justify-center items-center relative">
          <img
            src={bgImage2}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <Link to="/employee-login">
            <button
              className="text-white bg-gradient-to-r from-[#1a1625] to-[#ba9ffb] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-Quicksand rounded-lg px-5 py-2.5 text-center text-[50px] hover:shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              EMPLOYEE
            </button>
          </Link>
        </div>
      </div>
    </> */