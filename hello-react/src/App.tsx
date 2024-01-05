import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import TaskCard from './TaskCard';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 self-end absolute top-10 left-10">
        Smarter Tasks
      </h1>

      <p className="text-1xl  mb-4 self-end absolute top-20 left-10">
       <b>Project</b>: Graduation  Final Year Project (Revamp College Website)
      </p>
      <div className="flex w-full">
        <div className="w-full sm:w-1/2">
          <div className="bg-white border-black border rounded-md p-4">
            <h2 className="text-xl font-bold mb-4 flex flex-col items-center justify-center">Pending</h2>
            
              <TaskCard title="Build the website with static content" dueDate="10th April"  assigneeName="Rohit S" completed={false}/>
              <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" completed={false}/>
              <div className=" bg-gray-200 rounded-md p-4">+ New task</div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 ml-4">
          <div className="bg-white border-black border rounded-md p-4">
            <h2 className="text-xl font-bold mb-4 flex flex-col items-center justify-center">Done</h2>
          
              <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M" completed={true} />
              <TaskCard title="Get the approval from the principal" completedAtDate="20th April" assigneeName="Ajay S" completed={true} />
           
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;