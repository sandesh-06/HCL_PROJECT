import React from "react";
import Header from "./navbarComponents/Header";
import Navigate from "./navbarComponents/Navigate";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { ImCalendar } from "react-icons/im";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";


export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <>
      <div
        className="w-[250px] fixed min-h-screen text-white bg-[#46424f] font-quicksand flex flex-col items-center justify-around top-0 left-0"
      >
        {/* Header */}
        <Header heading="Project +" />
        <span className="text-slate-300 font-quicksand opacity-50 text-sm">
          Manager's Portal
        </span>
        <hr className="mx-auto bg-white w-[90%] my-3" />

        {/* Navgiation menu */}
        <div className="w-[70%] flex flex-col">
          <Navigate
            destination="/home"
            navigateTo="Home"
            icon={<AiOutlineHome className="white-icon" />}
          />
          <Navigate
            destination="/team"
            navigateTo="Team"
            icon={<AiOutlineTeam className="white-icon" />}
          />
          <Navigate
            destination="/projects"
            navigateTo="Projects"
            icon={<AiOutlineProject className="white-icon" />}
          />
          <Navigate
            destination="/dashboard"
            navigateTo="Dashboard"
            icon={<RxDashboard className="white-icon" />}
          />
        </div>
        <hr className="mx-auto bg-white w-[90%] my-3" />

        {/* Features */}
        <div className="w-[70%]">
          <Navigate
            destination="/"
            navigateTo="Add Member"
            icon={<AiOutlineUsergroupAdd className="white-icon" />}
          />
          <Navigate
            destination="/"
            navigateTo="Calendar"
            icon={<ImCalendar className="white-icon" />}
          />
          <Navigate
            destination="/"
            navigateTo="Analysis"
            icon={<BsGraphUpArrow className="white-icon" />}
          />
          <Navigate
            destination="/"
            navigateTo="Team Chat"
            icon={<BsFillChatLeftTextFill className="white-icon" />}
          />
        </div>
        <hr className="mx-auto bg-white w-[90%] my-3" />

        {/* Logout */}

        <div className="w-[70%] flex items-center my-3">
         <RiLogoutCircleRLine/>
          <Link
            to="/"
            className="ml-2 hover:font-semibold p-3"
            onClick={handleLogout}
          >
           Logout
          </Link>
        </div>
      </div>
    </>
  );
}
