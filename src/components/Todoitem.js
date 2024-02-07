import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import React from 'react'

const Todoitem = ({title, handleDelete, handleEdit}) => {
  return (
    <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
      <h6>{title}</h6>
      <div className='todo-icon'>
        <span className='mx-2 text-success' onClick={handleEdit}>
          <FaPen />
        </span>
        <span className='mx-2 text-danger' onClick={handleDelete}>
          <FaTrash />
        </span>
      </div>
    </li>
  )
}

export default Todoitem
