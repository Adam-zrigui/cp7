import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

export default function TaskList() {
 const tasks =  useSelector((store)=> store.task
 )
  return (
    <div>
      {
        tasks.map((task , i) => <Task key={i} task={task} />)
      }
    </div>
  )
}
