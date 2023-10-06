import React from "react";
import Navbar from "./Navbar";
import projectContext from "../../context/project/projectContext";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import DetailItem from "./homeComponents/alignComponents/DetailItem";
import PageTitle from "./homeComponents/alignComponents/PageTitle";
import jwtDecode from 'jwt-decode'

export default function Projects() {
  //getting token from localStorage
  const token = localStorage.getItem(("token"))
  //decoding the manager id from auth token
  const decodedToken = jwtDecode(token)
  const managerId = decodedToken.manager.empid //getting the empid of the manager
 
  let formatDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
  }

  
  const context = useContext(projectContext);
  const { projects, getAllProjects } = context;
  useEffect(() => {
    if (token) {
      getAllProjects();
    }
    <Navigate to="/" />;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 grid-flow-row w-screen h-screen ml-[250px] ">
        <div className="mx-10 col-span-2">
          <PageTitle white="" gradient="Projects"/>
        </div>
        
        {projects.length === 0 && (
          <div className="row-start-3 bg-[#2f2b3a] rounded-2xl flex justify-center items-center text-[20px] text-white font-extrabold">
            {" "}
            There is no projects available right now...{" "}
          </div>
        )}
        {projects.map((target) => {
          return (
            <div className={`bg-[#2f2b3a] rounded-2xl p-5  my-2 mx-4 ${target.manager.empid === managerId?" bg-gradient-to-r from-[#1a1625] to-[#9171f8]":""}`}>
              <DetailItem label="Project Name" value={target.pname} />
              <DetailItem label="Project ID" value={target.pid} />
              <DetailItem label="Start Date" value={formatDate(target.startDate)} />
              <DetailItem label="End Date" value={formatDate(target.endDate)} />
              <DetailItem label="Manager" value={target.manager.name} />
            
            </div>
          );
        })}
      </div>
    </>
  );
}
