import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/SliceTask/Slice'
import { editTask } from '../redux/SliceTask/Slice'
export default function Task({task}) {
const dispatch = useDispatch()
const [OnUp, setUp] = useState(false);
const [Edit, setEdit] = useState(task);
  return (
    <div >
      {OnUp ? 
      <><input type='text' defaultValue={task.title} onChange={(e) =>  setEdit({...Edit , title: e.target.value})}/>
<button onClick = {() => setUp(false)}>cancel</button>
<button onClick={() => {dispatch(editTask(Edit)); setUp(false) }}>confirm</button>      
      </>
       :   <><h3>{task.title}</h3>
        <button onClick={ () => setUp(true)}>update</button>
        <button  className='x'onClick={() => dispatch(deleteTask(task))}>X</button>
        </>
        }
     
    </div>
  )
}
