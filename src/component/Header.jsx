import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/SliceTask/Slice';

export default function Header() {
  const [getter , setter]= useState({title: ''});
const dispatch = useDispatch()
  return (
    <div>
        <input type="text"  value={getter.title}   placeholder='put ur task here'onChange={(e) =>setter({...getter, title:e.target.value})}/>
        <button onClick={() =>{ dispatch(addTask({...getter , isDone: false , id:Math.floor(Math.random()* 100000000 )}))}}>add</button>
    </div>
  )
}
