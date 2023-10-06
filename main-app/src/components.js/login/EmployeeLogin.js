import React from "react";
import { Link } from 'react-router-dom';

export default function EmployeeLogin() {
  return (
    <>
      <div className="flex border-5 bg-gradient-sky-indigo h-screen items-center justify-around">
        <p className="text-[50px]">Employee Portal is under development!</p>
        <p className="text-[80px]">&rarr;</p>
        <Link to="/employer-login">
        <button className="p-5 mx-5 text-black rounded-md text-[50px] hover:shadow-lg"> EMPLOYER LOGIN</button>
      </Link>
      </div>
      
    </>
  );
}
