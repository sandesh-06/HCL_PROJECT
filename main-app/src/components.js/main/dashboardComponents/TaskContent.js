import React, {useState} from 'react'
import CustomButton from './TaskContentComponents/CustomButton'
import Modal from './TaskContentComponents/Modal'
import ListTask from './TaskContentComponents/ListTask'

export default function TaskContent() {

  const [setshowModal, setShowModal] = useState(false)
  return (
    <div className='row-span-2 bg-[#2f2b3a]  rounded-2xl text-white p-3 flex flex-col'>
      <div className='h-5/6 overflow-auto'>
        <ListTask/>
        </div>

        <div>
        <CustomButton title="Add Task" setShowModal={setShowModal}/>
        {setshowModal && <Modal setShowModal={setShowModal}/>}
        </div>
       


    </div>
  )
}
