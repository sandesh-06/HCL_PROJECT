import React from 'react'

export default function PageTitle(props) {
  return (
    <div className="text-[2.5em] font-extrabold text-white mb-4 text-start col-span-full">
        {props.white} <span className="text-[1.25em] font-extrabold bg-gradient-to-r from-[#5e43f3] to-[#9171f8] text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-[#9171f8] hover:to-[#5e43f3] hover:cursor-default">{props.gradient}</span>
    </div>
  )
}
