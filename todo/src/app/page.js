
"use client"

import { useState } from "react"
import { TiDeleteOutline } from 'react-icons/ti';


export default function Home() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddTask = () => {
    setTasks([...tasks, inputValue]);
    setInputValue('');
  }

  const handleRemoveTask = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  }

  return (
    <div className=" mx-auto max-w-md mt-48 h-[100px]">
      
        <h3 className="text-slate-800 mb-6">What are your plans for today?</h3>
        <div className="flex gap-4">
          <input className="border border-green-700 rounded-xl mr-2 px-3 py-3 flex-grow outline-none" value={inputValue} onChange={handleInputValue} type="text" placeholder="write here.." />
          <button className="bg-green-700 hover:bg-green-800 text-white font-sans rounded-xl py-2 px-4 animate-pulse animate-once"
          onClick={handleAddTask}> add task </button>
          
        </div>
        <ul className="list-disc list-insite mt-5">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              {task}
              <button className="text-rose-700 hover:text-rose-900 text-lg rounded-xl font-sans py-1 px-1" onClick= {() => handleRemoveTask(index)}> <TiDeleteOutline /> </button>
            </li>
          ))}

        </ul>
      
      

    </div>
    
  )
}
