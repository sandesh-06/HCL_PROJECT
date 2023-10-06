import React from 'react'

export default function Header(props) {
  return (
    <div className='font-bold p-3 text-3xl bg-gradient-to-r from-[#7a5af5] to-[#a688fa] text-transparent bg-clip-text'>{props.heading}</div>
    
  )
}