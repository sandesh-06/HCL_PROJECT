import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Navigate(props) {

    //using useLocation hook to set active class for the page
    let location = useLocation();
    
  return (
    <>
    <div className="flex items-center my-3">
      {props.icon} 
      <Link to={props.destination} className={`ml-2 hover:font-semibold hover:text-[#9171f8] p-3 ${location.pathname===props.destination?'font-semibold text-[#9171f8]': ""}`}>{props.navigateTo}</Link>
    </div>
    </>
  )
}