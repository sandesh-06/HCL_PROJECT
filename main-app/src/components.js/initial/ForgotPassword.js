import React from "react";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
  return (
    <>
      <div className="flex flex-col border-5 bg-gradient-sky-indigo h-screen items-center justify-center">
        <div>
          <p className="mb-2 text-[50px]">
            Incase of password change, please inform the Help Desk
          </p>
        </div>
        <Link to='/employer-login'>
        <button className="shadow-md m-5 px-5 py-1 mx-5 text-black bg-sky-600 border-solid border-1 border-sky-500 rounded-md text-[30px] hover:shadow-lg hover:bg-sky-700">Login</button>
        </Link>
      </div>
    </>
  );
}
