import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({items, clearList, handleDelete, handleEdit}) => {
  return (
    <ul className='list-group my-5'>
      <h3 className='text-capitalize text-center'>todo list</h3>
      {items.map((item) => {
        return (
          <Todoitem 
                key={item.id} 
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                />
        )
      })}
      <button  
          onClick={clearList}
          type='button'
          className='btn btn-danger btn-block text-capitalize mt-5'
          >clear list</button>
    </ul>
  )
}

export default Todolist
