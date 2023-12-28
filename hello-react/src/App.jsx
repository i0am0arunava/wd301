import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TaskCard from './TaskCard'
import './index.css'

function App() {
  return (
    <div className="flex flex-col items-center">
    <div>
    <h1 className="font-bold text-4xl">Smarter Tasks</h1>
        <p className='text-gray-600'><b>Project:</b> Graduation Final Year Project (Revamp College Website) </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="border p-4 rounded-xl">
          <h1 className="font-bold text-3xl mb-3 text-gray-700">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S" complete="no"/>
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" complete="no"/>
        </div>
        <div className="border p-4 rounded-xl ml-4">
          <h1 className="font-bold text-3xl mb-3 text-gray-700">Done</h1>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M" complete="yes"/>
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S" complete="yes"/>
        </div>
      </div>
    </div>
      
      );
    }
    export default App