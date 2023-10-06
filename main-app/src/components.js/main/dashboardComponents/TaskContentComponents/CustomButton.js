import React from "react";

export default function CustomButton(props) {
  const showModal = ()=>{
    props.setShowModal(true)
  }
  return (
    <>
     <button type="button" className="w-full text-white bg-[#a688fa] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg dark:shadow-lg dark:shadow-purple-800/80 font-Quicksand rounded-lg text-[20px] px-5 py-2.5 text-center mr-2 mb-1 font-extrabold" onClick={showModal}>{props.title}</button>
    </>
  );
}
